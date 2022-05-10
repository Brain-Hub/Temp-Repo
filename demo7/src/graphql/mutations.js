/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBox = /* GraphQL */ `
  mutation CreateBox(
    $input: CreateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    createBox(input: $input, condition: $condition) {
      id
      name
      description
      unit {
        items {
          id
          BoxId
          name
          shortId
          description
          cycles
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const updateBox = /* GraphQL */ `
  mutation UpdateBox(
    $input: UpdateBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    updateBox(input: $input, condition: $condition) {
      id
      name
      description
      unit {
        items {
          id
          BoxId
          name
          shortId
          description
          cycles
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const deleteBox = /* GraphQL */ `
  mutation DeleteBox(
    $input: DeleteBoxInput!
    $condition: ModelBoxConditionInput
  ) {
    deleteBox(input: $input, condition: $condition) {
      id
      name
      description
      unit {
        items {
          id
          BoxId
          name
          shortId
          description
          cycles
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const createUnitStatus = /* GraphQL */ `
  mutation CreateUnitStatus(
    $input: CreateUnitStatusInput!
    $condition: ModelUnitStatusConditionInput
  ) {
    createUnitStatus(input: $input, condition: $condition) {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const updateUnitStatus = /* GraphQL */ `
  mutation UpdateUnitStatus(
    $input: UpdateUnitStatusInput!
    $condition: ModelUnitStatusConditionInput
  ) {
    updateUnitStatus(input: $input, condition: $condition) {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnitStatus = /* GraphQL */ `
  mutation DeleteUnitStatus(
    $input: DeleteUnitStatusInput!
    $condition: ModelUnitStatusConditionInput
  ) {
    deleteUnitStatus(input: $input, condition: $condition) {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const createUnit = /* GraphQL */ `
  mutation CreateUnit(
    $input: CreateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    createUnit(input: $input, condition: $condition) {
      id
      BoxId
      box {
        id
        name
        description
        unit {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      name
      shortId
      description
      configuration {
        id
        UnitId
        firmware
        async
        network
        password
        board
        shield
        baud
        createdAt
        updatedAt
      }
      pinout {
        id
        UnitId
        s
        i
        m
        createdAt
        updatedAt
      }
      status {
        id
        UnitId
        obs
        createdAt
        updatedAt
      }
      historic {
        items {
          id
          unitID
          obs
          createdAt
          updatedAt
        }
        nextToken
      }
      commands {
        items {
          id
          unitID
          Command
          createdAt
          updatedAt
        }
        nextToken
      }
      cycle {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      profile {
        id
        name
        description
        cycles {
          id
          name
          description
          duration
          recursive
          daily
          hourly
          lightCycle
          Sunset
          Sunrise
          createdAt
          updatedAt
        }
        loop
        loopLast
        createdAt
        updatedAt
      }
      cycles
      createdAt
      updatedAt
    }
  }
`;
export const updateUnit = /* GraphQL */ `
  mutation UpdateUnit(
    $input: UpdateUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    updateUnit(input: $input, condition: $condition) {
      id
      BoxId
      box {
        id
        name
        description
        unit {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      name
      shortId
      description
      configuration {
        id
        UnitId
        firmware
        async
        network
        password
        board
        shield
        baud
        createdAt
        updatedAt
      }
      pinout {
        id
        UnitId
        s
        i
        m
        createdAt
        updatedAt
      }
      status {
        id
        UnitId
        obs
        createdAt
        updatedAt
      }
      historic {
        items {
          id
          unitID
          obs
          createdAt
          updatedAt
        }
        nextToken
      }
      commands {
        items {
          id
          unitID
          Command
          createdAt
          updatedAt
        }
        nextToken
      }
      cycle {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      profile {
        id
        name
        description
        cycles {
          id
          name
          description
          duration
          recursive
          daily
          hourly
          lightCycle
          Sunset
          Sunrise
          createdAt
          updatedAt
        }
        loop
        loopLast
        createdAt
        updatedAt
      }
      cycles
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnit = /* GraphQL */ `
  mutation DeleteUnit(
    $input: DeleteUnitInput!
    $condition: ModelUnitConditionInput
  ) {
    deleteUnit(input: $input, condition: $condition) {
      id
      BoxId
      box {
        id
        name
        description
        unit {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      name
      shortId
      description
      configuration {
        id
        UnitId
        firmware
        async
        network
        password
        board
        shield
        baud
        createdAt
        updatedAt
      }
      pinout {
        id
        UnitId
        s
        i
        m
        createdAt
        updatedAt
      }
      status {
        id
        UnitId
        obs
        createdAt
        updatedAt
      }
      historic {
        items {
          id
          unitID
          obs
          createdAt
          updatedAt
        }
        nextToken
      }
      commands {
        items {
          id
          unitID
          Command
          createdAt
          updatedAt
        }
        nextToken
      }
      cycle {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      profile {
        id
        name
        description
        cycles {
          id
          name
          description
          duration
          recursive
          daily
          hourly
          lightCycle
          Sunset
          Sunrise
          createdAt
          updatedAt
        }
        loop
        loopLast
        createdAt
        updatedAt
      }
      cycles
      createdAt
      updatedAt
    }
  }
`;
export const createCommand = /* GraphQL */ `
  mutation CreateCommand(
    $input: CreateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    createCommand(input: $input, condition: $condition) {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const updateCommand = /* GraphQL */ `
  mutation UpdateCommand(
    $input: UpdateCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    updateCommand(input: $input, condition: $condition) {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const deleteCommand = /* GraphQL */ `
  mutation DeleteCommand(
    $input: DeleteCommandInput!
    $condition: ModelCommandConditionInput
  ) {
    deleteCommand(input: $input, condition: $condition) {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const createHistoric = /* GraphQL */ `
  mutation CreateHistoric(
    $input: CreateHistoricInput!
    $condition: ModelHistoricConditionInput
  ) {
    createHistoric(input: $input, condition: $condition) {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const updateHistoric = /* GraphQL */ `
  mutation UpdateHistoric(
    $input: UpdateHistoricInput!
    $condition: ModelHistoricConditionInput
  ) {
    updateHistoric(input: $input, condition: $condition) {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const deleteHistoric = /* GraphQL */ `
  mutation DeleteHistoric(
    $input: DeleteHistoricInput!
    $condition: ModelHistoricConditionInput
  ) {
    deleteHistoric(input: $input, condition: $condition) {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const createUnitConfiguration = /* GraphQL */ `
  mutation CreateUnitConfiguration(
    $input: CreateUnitConfigurationInput!
    $condition: ModelUnitConfigurationConditionInput
  ) {
    createUnitConfiguration(input: $input, condition: $condition) {
      id
      UnitId
      firmware
      async
      network
      password
      board
      shield
      baud
      createdAt
      updatedAt
    }
  }
`;
export const updateUnitConfiguration = /* GraphQL */ `
  mutation UpdateUnitConfiguration(
    $input: UpdateUnitConfigurationInput!
    $condition: ModelUnitConfigurationConditionInput
  ) {
    updateUnitConfiguration(input: $input, condition: $condition) {
      id
      UnitId
      firmware
      async
      network
      password
      board
      shield
      baud
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnitConfiguration = /* GraphQL */ `
  mutation DeleteUnitConfiguration(
    $input: DeleteUnitConfigurationInput!
    $condition: ModelUnitConfigurationConditionInput
  ) {
    deleteUnitConfiguration(input: $input, condition: $condition) {
      id
      UnitId
      firmware
      async
      network
      password
      board
      shield
      baud
      createdAt
      updatedAt
    }
  }
`;
export const createUnitPinout = /* GraphQL */ `
  mutation CreateUnitPinout(
    $input: CreateUnitPinoutInput!
    $condition: ModelUnitPinoutConditionInput
  ) {
    createUnitPinout(input: $input, condition: $condition) {
      id
      UnitId
      s
      i
      m
      createdAt
      updatedAt
    }
  }
`;
export const updateUnitPinout = /* GraphQL */ `
  mutation UpdateUnitPinout(
    $input: UpdateUnitPinoutInput!
    $condition: ModelUnitPinoutConditionInput
  ) {
    updateUnitPinout(input: $input, condition: $condition) {
      id
      UnitId
      s
      i
      m
      createdAt
      updatedAt
    }
  }
`;
export const deleteUnitPinout = /* GraphQL */ `
  mutation DeleteUnitPinout(
    $input: DeleteUnitPinoutInput!
    $condition: ModelUnitPinoutConditionInput
  ) {
    deleteUnitPinout(input: $input, condition: $condition) {
      id
      UnitId
      s
      i
      m
      createdAt
      updatedAt
    }
  }
`;
export const createInteractor = /* GraphQL */ `
  mutation CreateInteractor(
    $input: CreateInteractorInput!
    $condition: ModelInteractorConditionInput
  ) {
    createInteractor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      command
      category
      createdAt
      updatedAt
    }
  }
`;
export const updateInteractor = /* GraphQL */ `
  mutation UpdateInteractor(
    $input: UpdateInteractorInput!
    $condition: ModelInteractorConditionInput
  ) {
    updateInteractor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      command
      category
      createdAt
      updatedAt
    }
  }
`;
export const deleteInteractor = /* GraphQL */ `
  mutation DeleteInteractor(
    $input: DeleteInteractorInput!
    $condition: ModelInteractorConditionInput
  ) {
    deleteInteractor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      command
      category
      createdAt
      updatedAt
    }
  }
`;
export const createSensor = /* GraphQL */ `
  mutation CreateSensor(
    $input: CreateSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    createSensor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      powerSupply
      sensingPeriod
      manufactor
      boot
      init
      read
      print
      category
      measures
      pins
      createdAt
      updatedAt
    }
  }
`;
export const updateSensor = /* GraphQL */ `
  mutation UpdateSensor(
    $input: UpdateSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    updateSensor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      powerSupply
      sensingPeriod
      manufactor
      boot
      init
      read
      print
      category
      measures
      pins
      createdAt
      updatedAt
    }
  }
`;
export const deleteSensor = /* GraphQL */ `
  mutation DeleteSensor(
    $input: DeleteSensorInput!
    $condition: ModelSensorConditionInput
  ) {
    deleteSensor(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      powerSupply
      sensingPeriod
      manufactor
      boot
      init
      read
      print
      category
      measures
      pins
      createdAt
      updatedAt
    }
  }
`;
export const createSeedBatch = /* GraphQL */ `
  mutation CreateSeedBatch(
    $input: CreateSeedBatchInput!
    $condition: ModelSeedBatchConditionInput
  ) {
    createSeedBatch(input: $input, condition: $condition) {
      id
      batch
      date
      grower
      description
      numberOfSeeds
      germinationRate
      seedLife
      taxonomy
      variety
      commonName
      pollination
      quality
      createdAt
      updatedAt
    }
  }
`;
export const updateSeedBatch = /* GraphQL */ `
  mutation UpdateSeedBatch(
    $input: UpdateSeedBatchInput!
    $condition: ModelSeedBatchConditionInput
  ) {
    updateSeedBatch(input: $input, condition: $condition) {
      id
      batch
      date
      grower
      description
      numberOfSeeds
      germinationRate
      seedLife
      taxonomy
      variety
      commonName
      pollination
      quality
      createdAt
      updatedAt
    }
  }
`;
export const deleteSeedBatch = /* GraphQL */ `
  mutation DeleteSeedBatch(
    $input: DeleteSeedBatchInput!
    $condition: ModelSeedBatchConditionInput
  ) {
    deleteSeedBatch(input: $input, condition: $condition) {
      id
      batch
      date
      grower
      description
      numberOfSeeds
      germinationRate
      seedLife
      taxonomy
      variety
      commonName
      pollination
      quality
      createdAt
      updatedAt
    }
  }
`;
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      name
      description
      cycles {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      loop
      loopLast
      createdAt
      updatedAt
    }
  }
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      name
      description
      cycles {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      loop
      loopLast
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      name
      description
      cycles {
        id
        name
        description
        duration
        recursive
        daily
        hourly
        lightCycle
        Sunset
        Sunrise
        createdAt
        updatedAt
      }
      loop
      loopLast
      createdAt
      updatedAt
    }
  }
`;
export const createCycle = /* GraphQL */ `
  mutation CreateCycle(
    $input: CreateCycleInput!
    $condition: ModelCycleConditionInput
  ) {
    createCycle(input: $input, condition: $condition) {
      id
      name
      description
      duration
      recursive
      daily
      hourly
      lightCycle
      Sunset
      Sunrise
      createdAt
      updatedAt
    }
  }
`;
export const updateCycle = /* GraphQL */ `
  mutation UpdateCycle(
    $input: UpdateCycleInput!
    $condition: ModelCycleConditionInput
  ) {
    updateCycle(input: $input, condition: $condition) {
      id
      name
      description
      duration
      recursive
      daily
      hourly
      lightCycle
      Sunset
      Sunrise
      createdAt
      updatedAt
    }
  }
`;
export const deleteCycle = /* GraphQL */ `
  mutation DeleteCycle(
    $input: DeleteCycleInput!
    $condition: ModelCycleConditionInput
  ) {
    deleteCycle(input: $input, condition: $condition) {
      id
      name
      description
      duration
      recursive
      daily
      hourly
      lightCycle
      Sunset
      Sunrise
      createdAt
      updatedAt
    }
  }
`;
export const createMeasure = /* GraphQL */ `
  mutation CreateMeasure(
    $input: CreateMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    createMeasure(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      unit
      createdAt
      updatedAt
    }
  }
`;
export const updateMeasure = /* GraphQL */ `
  mutation UpdateMeasure(
    $input: UpdateMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    updateMeasure(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      unit
      createdAt
      updatedAt
    }
  }
`;
export const deleteMeasure = /* GraphQL */ `
  mutation DeleteMeasure(
    $input: DeleteMeasureInput!
    $condition: ModelMeasureConditionInput
  ) {
    deleteMeasure(input: $input, condition: $condition) {
      id
      name
      shortId
      description
      unit
      createdAt
      updatedAt
    }
  }
`;
