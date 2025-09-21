import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutHexMapInputObjectSchema } from './HexCellCreateWithoutHexMapInput.schema';
import { HexCellUncheckedCreateWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutHexMapInput>;
export const HexCellCreateOrConnectWithoutHexMapInputObjectZodSchema = makeSchema();
