import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static ArchetypesInstancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.ArchetypesInstancesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.ArchetypesInstancesCreated;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}