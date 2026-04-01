/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Apr 2026
 * This program can drive a car and avoid collision.
*/

// setup
basic.showIcon(IconNames.Happy)
robotbit.StpCarMove(0, 48)

// loop
while (true) {
  if (input.buttonIsPressed(button.A) == true) {
    robotbit.StpCarMove(20, 48)
    


  }