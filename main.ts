/* Copyright (c) 2026 MTHS All rights reserved
* Created by: Jet Lu
* Created on: Mar 2026
* This program moves a motor back and forth
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)
robotbit.StpCarMove(0, 48)

// a button
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  basic.showIcon(IconNames.Yes)

  // forever loop
  while (true) {

    // obtain distance using the sonar
    let distance = sonar.ping(
      DigitalPin.P1, // trigger
      DigitalPin.P2, // echo
      PingUnit.Centimeters,
    )

    // if distance is below 10
    if (distance > 0 && distance <= 10) {
      basic.clearScreen()
      basic.showString((distance) + ' cm')
      basic.showIcon(IconNames.Yes)
      robotbit.StpCarMove(0, 48) // stops the car
      basic.pause(1000)
      robotbit.StpCarMove(-10, 48) // reverse 10 cm
      basic.pause(1000)
      robotbit.StepperTurn(robotbit.Steppers.M1, robotbit.Turns.T1B4) // turn 90 degrees
    
    // if not
    } else {
      robotbit.StpCarMove(1, 48)
    }
  }
})
