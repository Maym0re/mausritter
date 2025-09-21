import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUpdateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutHexCellInput.schema';
import { LandmarkDetailCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LandmarkDetailUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpsertWithoutHexCellInput>;
export const LandmarkDetailUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
