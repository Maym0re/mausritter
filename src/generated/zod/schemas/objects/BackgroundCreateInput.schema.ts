import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterCreateNestedManyWithoutBackgroundInputObjectSchema as CharacterCreateNestedManyWithoutBackgroundInputObjectSchema } from './CharacterCreateNestedManyWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterCreateNestedManyWithoutBackgroundInputObjectSchema).optional()
}).strict();
export const BackgroundCreateInputObjectSchema: z.ZodType<Prisma.BackgroundCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundCreateInput>;
export const BackgroundCreateInputObjectZodSchema = makeSchema();
