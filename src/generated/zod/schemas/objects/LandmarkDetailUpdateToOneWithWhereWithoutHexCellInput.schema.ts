import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailWhereInputObjectSchema } from './LandmarkDetailWhereInput.schema';
import { LandmarkDetailUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUpdateWithoutHexCellInput.schema';
import { LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkDetailUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkDetailWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LandmarkDetailUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedUpdateWithoutHexCellInputObjectSchema)])
}).strict();
export const LandmarkDetailUpdateToOneWithWhereWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUpdateToOneWithWhereWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUpdateToOneWithWhereWithoutHexCellInput>;
export const LandmarkDetailUpdateToOneWithWhereWithoutHexCellInputObjectZodSchema = makeSchema();
