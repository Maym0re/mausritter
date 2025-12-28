import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkUpdateWithoutHexCellInputObjectSchema as LandmarkUpdateWithoutHexCellInputObjectSchema } from './LandmarkUpdateWithoutHexCellInput.schema';
import { LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema as LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexCellInput.schema';
import { LandmarkCreateWithoutHexCellInputObjectSchema as LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema';
import { LandmarkWhereInputObjectSchema as LandmarkWhereInputObjectSchema } from './LandmarkWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => LandmarkUpdateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexCellInputObjectSchema)]),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)]),
  where: z.lazy(() => LandmarkWhereInputObjectSchema).optional()
}).strict();
export const LandmarkUpsertWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkUpsertWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpsertWithoutHexCellInput>;
export const LandmarkUpsertWithoutHexCellInputObjectZodSchema = makeSchema();
