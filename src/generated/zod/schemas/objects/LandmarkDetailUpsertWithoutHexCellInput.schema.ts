import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailUpdateWithoutHexCellInputObjectSchema as LandmarkDetailUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUpdateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema as LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutHexCellInput.schema';
import { LandmarkDetailCreateWithoutHexCellInputObjectSchema as LandmarkDetailCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailCreateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkDetailWhereInputObjectSchema as LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LandmarkDetailUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional()
}).strict();
export const LandmarkDetailUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpsertWithoutHexCellInput>;
export const LandmarkDetailUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
