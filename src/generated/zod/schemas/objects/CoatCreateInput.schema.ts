import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedManyWithoutCoatInputObjectSchema as CharacterCreateNestedManyWithoutCoatInputObjectSchema } from './CharacterCreateNestedManyWithoutCoatInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  color: z.string(),
  pattern: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutCoatInputObjectSchema).optional()
}).strict();
export const CoatCreateInputObjectSchema: z.ZodType<Prisma.CoatCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.CoatCreateInput>;
export const CoatCreateInputObjectZodSchema = makeSchema();
