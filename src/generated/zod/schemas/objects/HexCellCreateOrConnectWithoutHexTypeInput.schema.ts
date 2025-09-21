import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema';
import { HexCellCreateWithoutHexTypeInputObjectSchema } from './HexCellCreateWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexCellWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema)])
}).strict();
export const HexCellCreateOrConnectWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellCreateOrConnectWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateOrConnectWithoutHexTypeInput>;
export const HexCellCreateOrConnectWithoutHexTypeInputObjectZodSchema = makeSchema();
