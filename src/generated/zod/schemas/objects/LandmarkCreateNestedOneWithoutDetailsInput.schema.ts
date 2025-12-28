import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutDetailsInputObjectSchema as LandmarkCreateWithoutDetailsInputObjectSchema } from './LandmarkCreateWithoutDetailsInput.schema';
import { LandmarkUncheckedCreateWithoutDetailsInputObjectSchema as LandmarkUncheckedCreateWithoutDetailsInputObjectSchema } from './LandmarkUncheckedCreateWithoutDetailsInput.schema';
import { LandmarkCreateOrConnectWithoutDetailsInputObjectSchema as LandmarkCreateOrConnectWithoutDetailsInputObjectSchema } from './LandmarkCreateOrConnectWithoutDetailsInput.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutDetailsInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutDetailsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => LandmarkCreateOrConnectWithoutDetailsInputObjectSchema).optional(),
  connect: z.lazy(() => LandmarkWhereUniqueInputObjectSchema).optional()
}).strict();
export const LandmarkCreateNestedOneWithoutDetailsInputObjectSchema: z.ZodType<Prisma.LandmarkCreateNestedOneWithoutDetailsInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkCreateNestedOneWithoutDetailsInput>;
export const LandmarkCreateNestedOneWithoutDetailsInputObjectZodSchema = makeSchema();
