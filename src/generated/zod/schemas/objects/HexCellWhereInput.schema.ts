import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { BoolFilterObjectSchema as BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { HexMapScalarRelationFilterObjectSchema as HexMapScalarRelationFilterObjectSchema } from './HexMapScalarRelationFilter.schema';
import { HexMapWhereInputObjectSchema as HexMapWhereInputObjectSchema } from './HexMapWhereInput.schema';
import { HexTypeScalarRelationFilterObjectSchema as HexTypeScalarRelationFilterObjectSchema } from './HexTypeScalarRelationFilter.schema';
import { HexTypeWhereInputObjectSchema as HexTypeWhereInputObjectSchema } from './HexTypeWhereInput.schema';
import { LandmarkNullableScalarRelationFilterObjectSchema as LandmarkNullableScalarRelationFilterObjectSchema } from './LandmarkNullableScalarRelationFilter.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { LandmarkDetailNullableScalarRelationFilterObjectSchema as LandmarkDetailNullableScalarRelationFilterObjectSchema } from './LandmarkDetailNullableScalarRelationFilter.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema';
import { SettlementNullableScalarRelationFilterObjectSchema as SettlementNullableScalarRelationFilterObjectSchema } from './SettlementNullableScalarRelationFilter.schema';
import { SettlementWhereInputObjectSchema as SettlementWhereInputObjectSchema } from './SettlementWhereInput.schema'

const hexcellwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => HexCellWhereInputObjectSchema), z.lazy(() => HexCellWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => HexCellWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => HexCellWhereInputObjectSchema), z.lazy(() => HexCellWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  hexMapId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  q: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  r: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  s: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hexTypeId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  landmarkId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  landmarkDetailId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  settlementId: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  isRevealed: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  notes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  customName: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  masterNotes: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  hexMap: z.union([z.lazy(() => HexMapScalarRelationFilterObjectSchema), z.lazy(() => HexMapWhereInputObjectSchema)]).optional(),
  hexType: z.union([z.lazy(() => HexTypeScalarRelationFilterObjectSchema), z.lazy(() => HexTypeWhereInputObjectSchema)]).optional(),
  landmark: z.union([z.lazy(() => LandmarkNullableScalarRelationFilterObjectSchema), z.lazy(() => LandmarkWhereInputObjectSchema)]).optional(),
  landmarkDetail: z.union([z.lazy(() => LandmarkDetailNullableScalarRelationFilterObjectSchema), z.lazy(() => LandmarkDetailWhereInputObjectSchema)]).optional(),
  settlement: z.union([z.lazy(() => SettlementNullableScalarRelationFilterObjectSchema), z.lazy(() => SettlementWhereInputObjectSchema)]).optional()
}).strict();
export const HexCellWhereInputObjectSchema: z.ZodType<Prisma.HexCellWhereInput> = hexcellwhereinputSchema as unknown as z.ZodType<Prisma.HexCellWhereInput>;
export const HexCellWhereInputObjectZodSchema = hexcellwhereinputSchema;
