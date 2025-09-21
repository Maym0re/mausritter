import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateOrConnectWithoutHexCellInput.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema).optional(),
  connect: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).optional()
}).strict();
export const LandmarkDetailCreateNestedOneWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateNestedOneWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateNestedOneWithoutHexCellInput>;
export const LandmarkDetailCreateNestedOneWithoutHexCellInputObjectZodSchema = makeSchema();
