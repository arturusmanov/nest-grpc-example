import { Hero } from './hero.interface';
import { HeroByIdRequestParams } from './hero-by-id.iterface';

/**
 * Интерфейс методов микросервиса Героя
 */
export interface HeroService {
  FindOne(request: HeroByIdRequestParams): Promise<Hero>;
}
