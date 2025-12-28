import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUncheckedCreateNestedManyWithoutCoatInputObjectSchema as CharacterUncheckedCreateNestedManyWithoutCoatInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutCoatInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  color: z.string(),
  pattern: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutCoatInputObjectSchema).optional()
}).strict();
export const CoatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.CoatUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatUncheckedCreateInput>;
export const CoatUncheckedCreateInputObjectZodSchema = makeSchema();
