import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkCreateWithoutHexTypeInputObjectSchema as LandmarkCreateWithoutHexTypeInputObjectSchema } from './LandmarkCreateWithoutHexTypeInput.schema';
import { LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema as LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedCreateWithoutHexTypeInput.schema';
import { LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema as LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema } from './LandmarkCreateOrConnectWithoutHexTypeInput.schema';
import { LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema as LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema } from './LandmarkUpsertWithWhereUniqueWithoutHexTypeInput.schema';
import { LandmarkCreateManyHexTypeInputEnvelopeObjectSchema as LandmarkCreateManyHexTypeInputEnvelopeObjectSchema } from './LandmarkCreateManyHexTypeInputEnvelope.schema';
import { LandmarkWhereUniqueInputObjectSchema as LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema as LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema } from './LandmarkUpdateWithWhereUniqueWithoutHexTypeInput.schema';
import { LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema as LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema } from './LandmarkUpdateManyWithWhereWithoutHexTypeInput.schema';
import { LandmarkScalarWhereInputObjectSchema as LandmarkScalarWhereInputObjectSchema } from './LandmarkScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateWithoutHexTypeInputObjectSchema).array(), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedCreateWithoutHexTypeInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkCreateOrConnectWithoutHexTypeInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpsertWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => LandmarkCreateManyHexTypeInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => LandmarkWhereUniqueInputObjectSchema), z.lazy(() => LandmarkWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUpdateManyWithWhereWithoutHexTypeInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => LandmarkScalarWhereInputObjectSchema), z.lazy(() => LandmarkScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectSchema: z.ZodType<Prisma.LandmarkUncheckedUpdateManyWithoutHexTypeNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUncheckedUpdateManyWithoutHexTypeNestedInput>;
export const LandmarkUncheckedUpdateManyWithoutHexTypeNestedInputObjectZodSchema = makeSchema();
