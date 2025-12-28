import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereUniqueInputObjectSchema as MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageCreateWithoutHexMapInputObjectSchema as MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema as MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageCreateOrConnectWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageCreateOrConnectWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageCreateOrConnectWithoutHexMapInput>;
export const MapImageCreateOrConnectWithoutHexMapInputObjectZodSchema = makeSchema();
