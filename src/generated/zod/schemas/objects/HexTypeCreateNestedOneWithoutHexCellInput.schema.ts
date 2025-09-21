import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HexTypeCreateWithoutHexCellInputObjectSchema } from './HexTypeCreateWithoutHexCellInput.schema';
import { HexTypeUncheckedCreateWithoutHexCellInputObjectSchema } from './HexTypeUncheckedCreateWithoutHexCellInput.schema';
import { HexTypeCreateOrConnectWithoutHexCellInputObjectSchema } from './HexTypeCreateOrConnectWithoutHexCellInput.schema';
import { HexTypeWhereUniqueInputObjectSchema } from './HexTypeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexTypeCreateWithoutHexCellInputObjectSchema), z.lazy(() => HexTypeUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexTypeCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => HexTypeWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexTypeCreateNestedOneWithoutHexCellInputObjectSchema: z.ZodType<Prisma.HexTypeCreateNestedOneWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.HexTypeCreateNestedOneWithoutHexCellInput>;
export const HexTypeCreateNestedOneWithoutHexCellInputObjectZodSchema = makeSchema();
