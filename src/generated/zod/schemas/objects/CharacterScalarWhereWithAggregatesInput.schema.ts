import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { BoolWithAggregatesFilterObjectSchema } from './BoolWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const characterscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CharacterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CharacterScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  playerId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  str: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  dex: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  wil: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  hp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  maxHp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  backgroundId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  birthsignId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  coatId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  physicalDetail: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  level: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  xp: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  grit: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  pips: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  isActive: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CharacterScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.CharacterScalarWhereWithAggregatesInput> = characterscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.CharacterScalarWhereWithAggregatesInput>;
export const CharacterScalarWhereWithAggregatesInputObjectZodSchema = characterscalarwherewithaggregatesinputSchema;
