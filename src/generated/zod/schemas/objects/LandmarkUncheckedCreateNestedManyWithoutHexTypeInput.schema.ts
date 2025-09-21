import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema';
import { LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexTypeInput.schema';
import { LandmarkCreateManyHexTypeInputEnvelopeObjectSchema } from './LandmarkCreateManyHexTypeInputEnvelope.schema';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedCreateNestedManyWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedCreateNestedManyWithoutHexTypeInput>;
export const LandmarkUncheckedCreateNestedManyWithoutHexTypeInputObjectZodSchema = makeSchema();
