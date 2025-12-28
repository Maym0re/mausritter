import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterUncheckedCreateNestedManyWithoutBackgroundInputObjectSchema as CharacterUncheckedCreateNestedManyWithoutBackgroundInputObjectSchema } from './CharacterUncheckedCreateNestedManyWithoutBackgroundInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  itemA: z.string(),
  itemB: z.string(),
  createdAt: z.coerce.date().optional(),
  characters: z.lazy(() => CharacterUncheckedCreateNestedManyWithoutBackgroundInputObjectSchema).optional()
}).strict();
export const BackgroundUncheckedCreateInputObjectSchema: z.ZodType<Prisma.BackgroundUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.BackgroundUncheckedCreateInput>;
export const BackgroundUncheckedCreateInputObjectZodSchema = makeSchema();
