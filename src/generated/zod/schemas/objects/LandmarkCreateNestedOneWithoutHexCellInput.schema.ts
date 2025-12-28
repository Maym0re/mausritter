import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexCellInputObjectSchema as LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkCreateOrConnectWithoutHexCellInputObjectSchema as LandmarkCreateOrConnectWithoutHexCellInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexCellInput.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => LandmarkWhereUniqueInputObjectSchema).optional()
}).strict();
export const LandmarkCreateNestedOneWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkCreateNestedOneWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateNestedOneWithoutHexCellInput>;
export const LandmarkCreateNestedOneWithoutHexCellInputObjectZodSchema = makeSchema();
