'use client';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { HexData, HEX_TYPES, COUNTRYSIDE_LANDMARKS, FOREST_LANDMARKS, RIVER_LANDMARKS, HUMAN_TOWN_LANDMARKS, LANDMARK_DETAILS } from '@/types/map';
import { generateSettlement } from '@/lib/mapUtils';

interface HexEditModalProps {
  hex: HexData;
  onSave: (data: Partial<HexData>) => void;
  onDelete?: () => void;
  onClose: () => void;
}

interface FormData {
  customName: string;
  hexTypeId: string;
  landmarkId: string;
  landmarkDetailId: string;
  hasSettlement: boolean;
  settlementName: string;
  settlementSize: 'farm' | 'crossroads' | 'hamlet' | 'village' | 'town' | 'city';
  notes: string;
}

export function HexEditModal({ hex, onSave, onDelete, onClose }: HexEditModalProps) {
  const { control, handleSubmit, watch, setValue } = useForm<FormData>({
    defaultValues: {
      customName: hex.customName || '',
      hexTypeId: hex.hexType.id,
      landmarkId: hex.landmark?.id || '',
      landmarkDetailId: hex.landmarkDetail?.id || '',
      hasSettlement: !!hex.settlement,
      settlementName: hex.settlement?.name || '',
      settlementSize: hex.settlement?.size || 'hamlet',
      notes: hex.notes || '',
    }
  });

  const hexTypeId = watch('hexTypeId');
  const hasSettlement = watch('hasSettlement');

  const getLandmarksForType = (typeId: string) => {
    switch (typeId) {
      case 'countryside': return COUNTRYSIDE_LANDMARKS;
      case 'forest': return FOREST_LANDMARKS;
      case 'river': return RIVER_LANDMARKS;
      case 'human_town': return HUMAN_TOWN_LANDMARKS;
      default: return [];
    }
  };

  const generateRandomContent = () => {
    const newSettlement = generateSettlement();
    setValue('settlementName', newSettlement.name);
    setValue('settlementSize', newSettlement.size);
    setValue('hasSettlement', true);
  };

  const onSubmit = (data: FormData) => {
    const hexType = HEX_TYPES.find(t => t.id === data.hexTypeId)!;
    const landmark = getLandmarksForType(data.hexTypeId).find(l => l.id === data.landmarkId);
    const landmarkDetail = LANDMARK_DETAILS.find(d => d.id === data.landmarkDetailId);

    let settlement = undefined;
    if (data.hasSettlement) {
      settlement = hex.settlement ? {
        ...hex.settlement,
        name: data.settlementName,
        size: data.settlementSize,
      } : {
        ...generateSettlement(),
        name: data.settlementName,
        size: data.settlementSize,
      };
    }

    onSave({
      customName: data.customName || undefined,
      hexType,
      landmark,
      landmarkDetail,
      settlement,
      notes: data.notes,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Заголовок */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">Edit Hex</h2>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="p-6 space-y-6">
            {/* Базовая информация */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Custom Name
                </label>
                <Controller
                  name="customName"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                      placeholder="Leave empty for auto-generated name"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hex Type
                </label>
                <Controller
                  name="hexTypeId"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      {HEX_TYPES.map(type => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            {/* Ориентир */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Landmark
              </label>
              <Controller
                name="landmarkId"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">No landmark</option>
                    {getLandmarksForType(hexTypeId).map(landmark => (
                      <option key={landmark.id} value={landmark.id}>
                        {landmark.name}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            {/* Деталь ориентира */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Landmark Detail
              </label>
              <Controller
                name="landmarkDetailId"
                control={control}
                render={({ field }) => (
                  <select
                    {...field}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">No detail</option>
                    {LANDMARK_DETAILS.map(detail => (
                      <option key={detail.id} value={detail.id}>
                        {detail.description.substring(0, 50)}...
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>

            {/* Поселение */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center">
                  <Controller
                    name="hasSettlement"
                    control={control}
                    render={({ field }) => (
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="mr-2 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
                      />
                    )}
                  />
                  <span className="text-sm font-medium text-gray-700">Has Settlement</span>
                </label>

                <button
                  type="button"
                  onClick={generateRandomContent}
                  className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200"
                >
                  🎲 Generate Random
                </button>
              </div>

              {hasSettlement && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Settlement Name
                    </label>
                    <Controller
                      name="settlementName"
                      control={control}
                      render={({ field }) => (
                        <input
                          {...field}
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                      )}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Settlement Size
                    </label>
                    <Controller
                      name="settlementSize"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                        >
                          <option value="farm">Farm/Manor (1-3 families)</option>
                          <option value="crossroads">Crossroads (3-5 families)</option>
                          <option value="hamlet">Hamlet (50-150 mice)</option>
                          <option value="village">Village (150-300 mice)</option>
                          <option value="town">Town (300-1000 mice)</option>
                          <option value="city">City (1000+ mice)</option>
                        </select>
                      )}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Заметки */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                GM Notes
              </label>
              <Controller
                name="notes"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Add any additional notes about this hex..."
                  />
                )}
              />
            </div>
          </div>

          {/* Футер */}
          <div className="flex justify-end gap-3 p-6 border-t border-gray-200">
            {onDelete && (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Удалить этот гекс?')) onDelete();
                }}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
              >
                🗑 Удалить
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 text-white hover:bg-amber-700 rounded-md transition-colors"
            >
              💾 Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
