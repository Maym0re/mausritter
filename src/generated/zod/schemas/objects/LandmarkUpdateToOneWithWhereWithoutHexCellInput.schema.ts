import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema';
import { LandmarkUpdateWithoutHexCellInputObjectSchema } from './LandmarkUpdateWithoutHexCellInput.schema';
import { LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => LandmarkUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema)])
}).strict();
export const LandmarkUpdateToOneWithWhereWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateToOneWithWhereWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateToOneWithWhereWithoutHexCellInput>;
export const LandmarkUpdateToOneWithWhereWithoutHexCellInputObjectZodSchema = makeSchema();
