import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static RacesInstancesCreated = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.RacesInstancesCreated += 1;
  }

  static createdRacesInstances(): number {
    return this.RacesInstancesCreated;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}