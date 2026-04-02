/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jet Lu
 * Created on: Apr 2026
 * This program can drive a car and avoid collision.
*/

// variable
let numDist: number = 0

// setup
basic.showIcon(IconNames.Happy)
robotbit.StpCarMove(0, 48)

// loop forever
while (true) {
  // find distance
  numDist = sonar.ping(
    DigitalPin.P1, // trigger
    DigitalPin.P2, // echo
    PingUnit.Centimeters
  )

  // moving car
  if (input.buttonIsPressed(Button.A) == true) {
    robotbit.StpCarMove(20, 48)
    basic.showString("moving")
    basic.showIcon(IconNames.Yes)
  
  // avoid collision
    if (numDist < 10) {
      robotbit.StpCarMove(0, 48)
      basic.showIcon(IconNames.Triangle)
      pause(500)
      robotbit.StpCarMove(-10, 48)
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B0) // turns 1 motor 180 degrees
      pause(500)
      robotbit.StpCarMove(20, 48)
    }
  }
}
