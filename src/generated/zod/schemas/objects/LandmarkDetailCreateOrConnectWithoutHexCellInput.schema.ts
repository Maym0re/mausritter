import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereUniqueInputObjectSchema as LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema';
import { LandmarkDetailCreateWithoutHexCellInputObjectSchema as LandmarkDetailCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema)])
}).strict();
export const LandmarkDetailCreateOrConnectWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailCreateOrConnectWithoutHexCellInput>;
export const LandmarkDetailCreateOrConnectWithoutHexCellInputObjectZodSchema = makeSchema();
