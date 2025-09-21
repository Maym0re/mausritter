import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { LandmarkWhereUniqueInputObjectSchema } from './LandmarkWhereUniqueInput.schema';
import { LandmarkUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUpdateWithoutHexTypeInput.schema';
import { LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema } from './LandmarkUncheckedUpdateWithoutHexTypeInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => LandmarkWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => LandmarkUpdateWithoutHexTypeInputObjectSchema), z.lazy(() => LandmarkUncheckedUpdateWithoutHexTypeInputObjectSchema)])
}).strict();
export const LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectSchema: z.ZodType<Prisma.LandmarkUpdateWithWhereUniqueWithoutHexTypeInput> = makeSchema() as unknown as z.ZodType<Prisma.LandmarkUpdateWithWhereUniqueWithoutHexTypeInput>;
export const LandmarkUpdateWithWhereUniqueWithoutHexTypeInputObjectZodSchema = makeSchema();
