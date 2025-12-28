import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeWhereUniqueInputObjectSchema as HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema';
import { HexTypeCreateWithoutHexCellInputObjectSchema as HexTypeCreateWithoutHexCellInputObjectSchema } from './HexTypeCreateWithoutHexCellInput.schema';
import { HexTypeUncheckedCreateWithoutHexCellInputObjectSchema as HexTypeUncheckedCreateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedCreateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => HexTypeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => HexTypeCreateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutHexCellInputObjectSchema)])
}).strict();
export const HexTypeCreateOrConnectWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeCreateOrConnectWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateOrConnectWithoutHexCellInput>;
export const HexTypeCreateOrConnectWithoutHexCellInputObjectZodSchema = makeSchema();
