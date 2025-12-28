import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexCellCreateWithoutHexMapInputObjectSchema as HexCellCreateWithoutHexMapInputObjectSchema } from './HexCellCreateWithoutHexMapInput.schema';
import { HexCellUncheckedCreateWithoutHexMapInputObjectSchema as HexCellUncheckedCreateWithoutHexMapInputObjectSchema } from './HexCellUncheckedCreateWithoutHexMapInput.schema';
import { HexCellCreateOrConnectWithoutHexMapInputObjectSchema as HexCellCreateOrConnectWithoutHexMapInputObjectSchema } from './HexCellCreateOrConnectWithoutHexMapInput.schema';
import { HexCellCreateManyHexMapInputEnvelopeObjectSchema as HexCellCreateManyHexMapInputEnvelopeObjectSchema } from './HexCellCreateManyHexMapInputEnvelope.schema';
import { HexCellWhereUniqueInputObjectSchema as HexCellWhereUniqueInputObjectSchema } from './HexCellWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => HexCellUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => HexCellCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => HexCellCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => HexCellCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => HexCellWhereUniqueInputObjectSchema), z.lazy(() => HexCellWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectSchema: z.ZodType<Prisma.HexCellUncheckedCreateNestedManyWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.HexCellUncheckedCreateNestedManyWithoutHexMapInput>;
export const HexCellUncheckedCreateNestedManyWithoutHexMapInputObjectZodSchema = makeSchema();
