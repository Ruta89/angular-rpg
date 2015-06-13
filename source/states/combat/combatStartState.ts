/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/// <reference path="../gameCombatStateMachine.ts" />

module rpg.states.combat {

  // Combat Begin
  //--------------------------------------------------------------------------
  export class CombatStartState extends CombatState {
    static NAME:string = "Combat Started";
    name:string = CombatStartState.NAME;

    enter(machine:CombatStateMachine) {
      super.enter(machine);
      machine.turnList = <GameEntityObject[]>_.shuffle(_.union(machine.getLiveParty(), machine.getLiveEnemies()));
      machine.current = machine.turnList.shift();
      machine.currentDone = true;
      machine.setCurrentState(CombatChooseActionState.NAME);
    }
  }

}