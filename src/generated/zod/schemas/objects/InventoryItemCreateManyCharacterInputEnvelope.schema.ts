import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InventoryItemCreateManyCharacterInputObjectSchema } from './InventoryItemCreateManyCharacterInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => InventoryItemCreateManyCharacterInputObjectSchema), z.lazy(() => InventoryItemCreateManyCharacterInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const InventoryItemCreateManyCharacterInputEnvelopeObjectSchema: z.ZodType<Prisma.InventoryItemCreateManyCharacterInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.InventoryItemCreateManyCharacterInputEnvelope>;
export const InventoryItemCreateManyCharacterInputEnvelopeObjectZodSchema = makeSchema();
