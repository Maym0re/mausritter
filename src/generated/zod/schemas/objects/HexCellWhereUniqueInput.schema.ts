import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellHexMapIdQRSCompoundUniqueInputObjectSchema as HexCellHexMapIdQRSCompoundUniqueInputObjectSchema } from './HexCellHexMapIdQRSCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  hexMapId_q_r_s: z.lazy(() => HexCellHexMapIdQRSCompoundUniqueInputObjectSchema).optional()
}).strict();
export const HexCellWhereUniqueInputObjectSchema: z.ZodType<Prisma.HexCellWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellWhereUniqueInput>;
export const HexCellWhereUniqueInputObjectZodSchema = makeSchema();
