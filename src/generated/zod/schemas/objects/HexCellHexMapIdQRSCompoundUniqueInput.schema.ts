import { z } from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  hexMapId: z.string(),
  q: z.number().int(),
  r: z.number().int(),
  s: z.number().int()
}).strict();
export const HexCellHexMapIdQRSCompoundUniqueInputObjectSchema: z.ZodType<Prisma.HexCellHexMapIdQRSCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellHexMapIdQRSCompoundUniqueInput>;
export const HexCellHexMapIdQRSCompoundUniqueInputObjectZodSchema = makeSchema();
