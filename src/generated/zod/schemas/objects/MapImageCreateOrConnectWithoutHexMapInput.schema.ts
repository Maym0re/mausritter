import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MapImageWhereUniqueInputObjectSchema } from './MapImageWhereUniqueInput.schema';
import { MapImageCreateWithoutHexMapInputObjectSchema } from './MapImageCreateWithoutHexMapInput.schema';
import { MapImageUncheckedCreateWithoutHexMapInputObjectSchema } from './MapImageUncheckedCreateWithoutHexMapInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => MapImageWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => MapImageCreateWithoutHexMapInputObjectSchema), z.lazy(() => MapImageUncheckedCreateWithoutHexMapInputObjectSchema)])
}).strict();
export const MapImageCreateOrConnectWithoutHexMapInputObjectSchema: z.ZodType<Prisma.MapImageCreateOrConnectWithoutHexMapInput> = makeSchema() as unknown as z.ZodType<Prisma.MapImageCreateOrConnectWithoutHexMapInput>;
export const MapImageCreateOrConnectWithoutHexMapInputObjectZodSchema = makeSchema();
