import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const characterscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CharacterScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CharacterScalarWhereInputObjectSchema), z.lazy(() => CharacterScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  notes: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  playerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  campaignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  str: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  dex: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  wil: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  hp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  maxHp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  backgroundId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  birthsignId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  coatId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  physicalDetail: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  level: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  xp: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  grit: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  pips: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  isActive: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const CharacterScalarWhereInputObjectSchema: z.ZodType<Prisma.CharacterScalarWhereInput> = characterscalarwhereinputSchema as unknown as z.ZodType<Prisma.CharacterScalarWhereInput>;
export const CharacterScalarWhereInputObjectZodSchema = characterscalarwhereinputSchema;
