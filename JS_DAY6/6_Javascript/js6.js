// Convert the above image in JSON object 

var Technical_Specifications={
    Dimensions:{
        Overall_length:3500,
        Overall_width:1600,
        Overall_height:1490,
        Wheelbase:2360,
        Track_width:{
            Front:1405,
            Rear:1400
        },
        Minimum_turning_radius:4.5,
        Minimum_ground_clearance:170

    },
    Capacities:{
        Seating_capacity:5,
        Fuel_tank_capacity:35
    },
    Engine:{
        Type:"KB-SERIES",
        Number_of_cylinders:3,
        Number_of_valves:12,
        Capacity:998,
        Bore_x_storke:{
            lenght:73.0,
            breadth:79.5
        },
        Compress_ratio:"10:1",
        Maximum_power:{
            PS:"67/6",
            rpm:200
        },
        Maximum_torque:{
            Nm:"90",
            rpm:"3500"
        },
        fuel_distribution:"Multipoint Injection"
    },
    Transmission:{
        Type:"5-speed MT"
    },
    Chassis:{
        Steering:["Rack&Pinion","Power assisted"],
        Brakes:{
            Front:"Ventilated discs",
            Rear:"Drums"
        },
        Suspension:{
            Front:["MacPherson strut","coil spring"],
            Rear:["Isolated trailing link","coil spring"]
        },
        shock_absorders:"Gas filled",
        Tyre:"155/80R13"

    },
    Weights:{
        Kerb_weigth:{
            min:860,
            with_full_options:880
        },
        Gross_vehicle_weight:1320
    }

}

console.log(Technical_Specifications)

