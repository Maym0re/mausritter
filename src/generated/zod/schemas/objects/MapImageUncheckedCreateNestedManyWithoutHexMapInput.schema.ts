import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema';
import { MapImageCreateOrConnectWithoutHexMapInputObjectSchema } from './MapImageCreateOrConnectWithoutHexMapInput.schema';
import { MapImageCreateManyHexMapInputEnvelopeObjectSchema } from './MapImageCreateManyHexMapInputEnvelope.schema';
import { MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapImageCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUncheckedCreateNestedManyWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUncheckedCreateNestedManyWithoutHexMapInput>;
export const MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectZodSchema = makeSchema();
