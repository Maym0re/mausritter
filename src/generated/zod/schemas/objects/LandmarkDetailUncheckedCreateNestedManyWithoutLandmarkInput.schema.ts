import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkDetailCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateWithoutLandmarkInput.schema';
import { LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema } from './LandmarkDetailUncheckedCreateWithoutLandmarkInput.schema';
import { LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema } from './LandmarkDetailCreateOrConnectWithoutLandmarkInput.schema';
import { LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema } from './LandmarkDetailCreateManyLandmarkInputEnvelope.schema';
import { LandmarkDetailWhereUniqueInputObjectSchema } from './LandmarkDetailWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateWithoutLandmarkInputObjectSchema).array(), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailUncheckedCreateWithoutLandmarkInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema), z.lazy(() => LandmarkDetailCreateOrConnectWithoutLandmarkInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkDetailCreateManyLandmarkInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema), z.lazy(() => LandmarkDetailWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectSchema: z.ZodType<Prisma.LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInput>;
export const LandmarkDetailUncheckedCreateNestedManyWithoutLandmarkInputObjectZodSchema = makeSchema();
