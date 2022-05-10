/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBox = /* GraphQL */ `
  subscription OnCreateBox {
    onCreateBox {
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
export const onUpdateBox = /* GraphQL */ `
  subscription OnUpdateBox {
    onUpdateBox {
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
export const onDeleteBox = /* GraphQL */ `
  subscription OnDeleteBox {
    onDeleteBox {
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
export const onCreateUnitStatus = /* GraphQL */ `
  subscription OnCreateUnitStatus {
    onCreateUnitStatus {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUnitStatus = /* GraphQL */ `
  subscription OnUpdateUnitStatus {
    onUpdateUnitStatus {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUnitStatus = /* GraphQL */ `
  subscription OnDeleteUnitStatus {
    onDeleteUnitStatus {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUnit = /* GraphQL */ `
  subscription OnCreateUnit {
    onCreateUnit {
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
export const onUpdateUnit = /* GraphQL */ `
  subscription OnUpdateUnit {
    onUpdateUnit {
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
export const onDeleteUnit = /* GraphQL */ `
  subscription OnDeleteUnit {
    onDeleteUnit {
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
export const onCreateCommand = /* GraphQL */ `
  subscription OnCreateCommand {
    onCreateCommand {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCommand = /* GraphQL */ `
  subscription OnUpdateCommand {
    onUpdateCommand {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCommand = /* GraphQL */ `
  subscription OnDeleteCommand {
    onDeleteCommand {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const onCreateHistoric = /* GraphQL */ `
  subscription OnCreateHistoric {
    onCreateHistoric {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateHistoric = /* GraphQL */ `
  subscription OnUpdateHistoric {
    onUpdateHistoric {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteHistoric = /* GraphQL */ `
  subscription OnDeleteHistoric {
    onDeleteHistoric {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUnitConfiguration = /* GraphQL */ `
  subscription OnCreateUnitConfiguration {
    onCreateUnitConfiguration {
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
export const onUpdateUnitConfiguration = /* GraphQL */ `
  subscription OnUpdateUnitConfiguration {
    onUpdateUnitConfiguration {
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
export const onDeleteUnitConfiguration = /* GraphQL */ `
  subscription OnDeleteUnitConfiguration {
    onDeleteUnitConfiguration {
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
export const onCreateUnitPinout = /* GraphQL */ `
  subscription OnCreateUnitPinout {
    onCreateUnitPinout {
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
export const onUpdateUnitPinout = /* GraphQL */ `
  subscription OnUpdateUnitPinout {
    onUpdateUnitPinout {
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
export const onDeleteUnitPinout = /* GraphQL */ `
  subscription OnDeleteUnitPinout {
    onDeleteUnitPinout {
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
export const onCreateInteractor = /* GraphQL */ `
  subscription OnCreateInteractor {
    onCreateInteractor {
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
export const onUpdateInteractor = /* GraphQL */ `
  subscription OnUpdateInteractor {
    onUpdateInteractor {
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
export const onDeleteInteractor = /* GraphQL */ `
  subscription OnDeleteInteractor {
    onDeleteInteractor {
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
export const onCreateSensor = /* GraphQL */ `
  subscription OnCreateSensor {
    onCreateSensor {
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
export const onUpdateSensor = /* GraphQL */ `
  subscription OnUpdateSensor {
    onUpdateSensor {
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
export const onDeleteSensor = /* GraphQL */ `
  subscription OnDeleteSensor {
    onDeleteSensor {
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
export const onCreateSeedBatch = /* GraphQL */ `
  subscription OnCreateSeedBatch {
    onCreateSeedBatch {
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
export const onUpdateSeedBatch = /* GraphQL */ `
  subscription OnUpdateSeedBatch {
    onUpdateSeedBatch {
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
export const onDeleteSeedBatch = /* GraphQL */ `
  subscription OnDeleteSeedBatch {
    onDeleteSeedBatch {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateCycle = /* GraphQL */ `
  subscription OnCreateCycle {
    onCreateCycle {
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
export const onUpdateCycle = /* GraphQL */ `
  subscription OnUpdateCycle {
    onUpdateCycle {
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
export const onDeleteCycle = /* GraphQL */ `
  subscription OnDeleteCycle {
    onDeleteCycle {
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
export const onCreateMeasure = /* GraphQL */ `
  subscription OnCreateMeasure {
    onCreateMeasure {
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
export const onUpdateMeasure = /* GraphQL */ `
  subscription OnUpdateMeasure {
    onUpdateMeasure {
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
export const onDeleteMeasure = /* GraphQL */ `
  subscription OnDeleteMeasure {
    onDeleteMeasure {
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
