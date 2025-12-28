import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CharacterArgsObjectSchema as CharacterArgsObjectSchema } from './CharacterArgs.schema'

const makeSchema = () => z.object({
  character: z.union([z.boolean(), z.lazy(() => CharacterArgsObjectSchema)]).optional()
}).strict();
export const InventoryItemIncludeObjectSchema: z.ZodType<Prisma.InventoryItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemInclude>;
export const InventoryItemIncludeObjectZodSchema = makeSchema();
