import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkCreateWithoutHexCellInputObjectSchema as LandmarkCreateWithoutHexCellInputObjectSchema } from './LandmarkCreateWithoutHexCellInput.schema';
import { LandmarkUncheckedCreateWithoutHexCellInputObjectSchema as LandmarkUncheckedCreateWithoutHexCellInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexCellInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexCellInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexCellInputObjectSchema)])
}).strict();
export const LandmarkCreateOrConnectWithoutHexCellInputObjectSchema: z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexCellInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateOrConnectWithoutHexCellInput>;
export const LandmarkCreateOrConnectWithoutHexCellInputObjectZodSchema = makeSchema();
