import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)])
}).strict();
export const LandmarkCreateOrConnectWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexCellInput>;
export const LandmarkCreateOrConnectWithoutHexCellInputObjectZodSchema = makeSchema();
