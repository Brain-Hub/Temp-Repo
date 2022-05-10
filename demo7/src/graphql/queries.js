/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBox = /* GraphQL */ `
  query GetBox($id: ID!) {
    getBox(id: $id) {
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
export const listBoxes = /* GraphQL */ `
  query ListBoxes(
    $filter: ModelBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        unit {
          items {
                  id
                  BoxId
                  box {
                    id
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
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUnitStatus = /* GraphQL */ `
  query GetUnitStatus($UnitId: ID!) {
    getUnitStatus(UnitId: $UnitId) {
      id
      UnitId
      obs
      createdAt
      updatedAt
    }
  }
`;
export const listUnitStatuses = /* GraphQL */ `
  query ListUnitStatuses(
    $UnitId: ID
    $filter: ModelUnitStatusFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUnitStatuses(
      UnitId: $UnitId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        UnitId
        obs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUnit = /* GraphQL */ `
  query GetUnit($id: ID!) {
    getUnit(id: $id) {
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
export const listUnits = /* GraphQL */ `
  query ListUnits(
    $filter: ModelUnitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        BoxId
        box {
          id
          name
          description
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
          nextToken
        }
        commands {
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
          loop
          loopLast
          createdAt
          updatedAt
        }
        cycles
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCommand = /* GraphQL */ `
  query GetCommand($id: ID!) {
    getCommand(id: $id) {
      id
      unitID
      Command
      createdAt
      updatedAt
    }
  }
`;
export const listCommands = /* GraphQL */ `
  query ListCommands(
    $filter: ModelCommandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitID
        Command
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistoric = /* GraphQL */ `
  query GetHistoric($id: ID!) {
    getHistoric(id: $id) {
      id
      unitID
      obs
      createdAt
      updatedAt
    }
  }
`;
export const listHistorics = /* GraphQL */ `
  query ListHistorics(
    $filter: ModelHistoricFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unitID
        obs
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUnitConfiguration = /* GraphQL */ `
  query GetUnitConfiguration($UnitId: ID!) {
    getUnitConfiguration(UnitId: $UnitId) {
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
export const listUnitConfigurations = /* GraphQL */ `
  query ListUnitConfigurations(
    $UnitId: ID
    $filter: ModelUnitConfigurationFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUnitConfigurations(
      UnitId: $UnitId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUnitPinout = /* GraphQL */ `
  query GetUnitPinout($UnitId: ID!) {
    getUnitPinout(UnitId: $UnitId) {
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
export const listUnitPinouts = /* GraphQL */ `
  query ListUnitPinouts(
    $UnitId: ID
    $filter: ModelUnitPinoutFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUnitPinouts(
      UnitId: $UnitId
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        UnitId
        s
        i
        m
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getInteractor = /* GraphQL */ `
  query GetInteractor($id: ID!) {
    getInteractor(id: $id) {
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
export const listInteractors = /* GraphQL */ `
  query ListInteractors(
    $filter: ModelInteractorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInteractors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shortId
        description
        command
        category
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSensor = /* GraphQL */ `
  query GetSensor($id: ID!) {
    getSensor(id: $id) {
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
export const listSensors = /* GraphQL */ `
  query ListSensors(
    $filter: ModelSensorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSensors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSeedBatch = /* GraphQL */ `
  query GetSeedBatch($id: ID!) {
    getSeedBatch(id: $id) {
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
export const listSeedBatches = /* GraphQL */ `
  query ListSeedBatches(
    $filter: ModelSeedBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeedBatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCycle = /* GraphQL */ `
  query GetCycle($id: ID!) {
    getCycle(id: $id) {
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
export const listCycles = /* GraphQL */ `
  query ListCycles(
    $filter: ModelCycleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCycles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getMeasure = /* GraphQL */ `
  query GetMeasure($id: ID!) {
    getMeasure(id: $id) {
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
export const listMeasures = /* GraphQL */ `
  query ListMeasures(
    $filter: ModelMeasureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeasures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        shortId
        description
        unit
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
