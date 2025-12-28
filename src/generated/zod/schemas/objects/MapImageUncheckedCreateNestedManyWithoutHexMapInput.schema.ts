import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageCreateWithoutHexMapInputObjectSchema as MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema as MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema';
import { MapImageCreateOrConnectWithoutHexMapInputObjectSchema as MapImageCreateOrConnectWithoutHexMapInputObjectSchema } from './MapImageCreateOrConnectWithoutHexMapInput.schema';
import { MapImageCreateManyHexMapInputEnvelopeObjectSchema as MapImageCreateManyHexMapInputEnvelopeObjectSchema } from './MapImageCreateManyHexMapInputEnvelope.schema';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema).array(), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema), z.lazy(() => MapImageCreateOrConnectWithoutHexMapInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => MapImageCreateManyHexMapInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => MapImageWhereUniqueInputObjectSchema), z.lazy(() => MapImageWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageUncheckedCreateNestedManyWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageUncheckedCreateNestedManyWithoutHexMapInput>;
export const MapImageUncheckedCreateNestedManyWithoutHexMapInputObjectZodSchema = makeSchema();
