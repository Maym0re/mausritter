import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutHexTypeInputObjectSchema as HexCellCreateWithoutHexTypeInputObjectSchema } from './HexCellCreateWithoutHexTypeInput.schema';
import { HexCellUncheckedCreateWithoutHexTypeInputObjectSchema as HexCellUncheckedCreateWithoutHexTypeInputObjectSchema } from './HexCellUncheckedCreateWithoutHexTypeInput.schema';
import { HexCellCreateOrConnectWithoutHexTypeInputObjectSchema as HexCellCreateOrConnectWithoutHexTypeInputObjectSchema } from './HexCellCreateOrConnectWithoutHexTypeInput.schema';
import { HexCellCreateManyHexTypeInputEnvelopeObjectSchema as HexCellCreateManyHexTypeInputEnvelopeObjectSchema } from './HexCellCreateManyHexTypeInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellCreateNestedManyWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.HexCellCreateNestedManyWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellCreateNestedManyWithoutHexTypeInput>;
export const HexCellCreateNestedManyWithoutHexTypeInputObjectZodSchema = makeSchema();
