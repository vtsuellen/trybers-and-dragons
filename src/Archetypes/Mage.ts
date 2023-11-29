import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  private static ArchetypesInstancesCreated = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.ArchetypesInstancesCreated += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.ArchetypesInstancesCreated;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}