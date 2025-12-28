import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { HexMapCreateWithoutImagesInputObjectSchema as HexMapCreateWithoutImagesInputObjectSchema } from './HexMapCreateWithoutImagesInput.schema';
import { HexMapUncheckedCreateWithoutImagesInputObjectSchema as HexMapUncheckedCreateWithoutImagesInputObjectSchema } from './HexMapUncheckedCreateWithoutImagesInput.schema';
import { HexMapCreateOrConnectWithoutImagesInputObjectSchema as HexMapCreateOrConnectWithoutImagesInputObjectSchema } from './HexMapCreateOrConnectWithoutImagesInput.schema';
import { HexMapWhereUniqueInputObjectSchema as HexMapWhereUniqueInputObjectSchema } from './HexMapWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => HexMapCreateWithoutImagesInputObjectSchema), z.lazy(() => HexMapUncheckedCreateWithoutImagesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => HexMapCreateOrConnectWithoutImagesInputObjectSchema).optional(),
  connect: z.lazy(() => HexMapWhereUniqueInputObjectSchema).optional()
}).strict();
export const HexMapCreateNestedOneWithoutImagesInputObjectSchema: z.ZodType<Prisma.HexMapCreateNestedOneWithoutImagesInput> = makeSchema() as unknown as z.ZodType<Prisma.HexMapCreateNestedOneWithoutImagesInput>;
export const HexMapCreateNestedOneWithoutImagesInputObjectZodSchema = makeSchema();
