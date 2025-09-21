import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUpdateWithoutHexCellInputObjectSchema } from './LandmarkUpdateWithoutHexCellInput.schema';
import { LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexCellInput.schema';
import { LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LandmarkUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional()
}).strict();
export const LandmarkUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpsertWithoutHexCellInput>;
export const LandmarkUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
