import { Injectable } from '@nestjs/common';
import { MyloggerService } from '../logger/logger.service';

@Injectable()
export class DatabaseService {
  constructor(private readonly logger: MyloggerService) {}

  public insurancePolicies() {
    const policies = [
      {
        id: 1,
        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 5799,
        coverage: 752204
      },
      {
        id: 2,
        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 6937,
        coverage: 380957
      },
      {
        id: 3,

        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 8277,
        coverage: 759323
      },
      {
        id: 4,

        status: true,
        name: 'Safe Protection',
        type: 'Pet',
        premium: 2609,
        coverage: 491596
      },
      {
        id: 5,
        status: true,
        name: 'Safe Protection',
        type: 'Pet',
        premium: 2974,
        coverage: 501705
      },
      {
        id: 6,
        status: true,
        name: 'Safe Protection',
        type: 'Pet',
        premium: 2498,
        coverage: 403677
      },
      {
        id: 7,
        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 1652,
        coverage: 355276
      },
      {
        id: 8,

        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 1665,
        coverage: 297175
      },
      {
        id: 9,

        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 1780,
        coverage: 220479
      },
      {
        id: 10,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 10120,
        coverage: 441607
      },
      {
        id: 11,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 10407,
        coverage: 471040
      },
      {
        id: 12,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 12641,
        coverage: 464752
      },
      {
        id: 13,
        status: true,
        name: 'Essential Package',
        type: 'Life',
        premium: 5865,
        coverage: 307624
      },
      {
        id: 14,
        status: true,
        name: 'Essential Package',
        type: 'Life',
        premium: 10880,
        coverage: 378344
      },
      {
        id: 15,
        status: true,
        name: 'Essential Package',
        type: 'Life',
        premium: 6049,
        coverage: 497811
      },
      {
        id: 16,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 8253,
        coverage: 1037588
      },
      {
        id: 17,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 9165,
        coverage: 788076
      },
      {
        id: 18,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 14389,
        coverage: 958682
      },
      {
        id: 19,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 1928,
        coverage: 328475
      },
      {
        id: 20,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 3276,
        coverage: 684313
      },
      {
        id: 21,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 2356,
        coverage: 379653
      },
      {
        id: 22,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 9930,
        coverage: 329926
      },
      {
        id: 23,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 10500,
        coverage: 342490
      },
      {
        id: 24,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 6857,
        coverage: 389640
      },
      {
        id: 25,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 3040,
        coverage: 619483
      },
      {
        id: 26,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 4298,
        coverage: 631498
      },
      {
        id: 27,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 5035,
        coverage: 399645
      },
      {
        id: 28,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 2818,
        coverage: 1091756
      },
      {
        id: 29,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 3606,
        coverage: 1121944
      },
      {
        id: 30,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 2915,
        coverage: 618718
      },
      {
        id: 31,
        status: true,
        name: 'Guardian Package',
        type: 'Home',
        premium: 11684,
        coverage: 497668
      },
      {
        id: 32,
        status: true,
        name: 'Guardian Package',
        type: 'Home',
        premium: 12658,
        coverage: 313374
      },
      {
        id: 33,
        status: true,
        name: 'Guardian Package',
        type: 'Home',
        premium: 8274,
        coverage: 431213
      },
      {
        id: 34,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 9137,
        coverage: 323898
      },
      {
        id: 35,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 9092,
        coverage: 234880
      },
      {
        id: 36,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 8134,
        coverage: 359537
      },
      {
        id: 37,
        status: true,
        name: 'Shield Protection',
        type: 'Pet',
        premium: 4752,
        coverage: 726117
      },
      {
        id: 38,
        status: true,
        name: 'Shield Protection',
        type: 'Pet',
        premium: 4097,
        coverage: 576448
      },
      {
        id: 39,
        status: true,
        name: 'Shield Protection',
        type: 'Pet',
        premium: 6838,
        coverage: 1016702
      },
      {
        id: 40,
        status: true,
        name: 'Smart Protection',
        type: 'Car',
        premium: 7003,
        coverage: 229421
      },
      {
        id: 41,
        status: true,
        name: 'Smart Protection',
        type: 'Car',
        premium: 8413,
        coverage: 367066
      },
      {
        id: 42,
        status: true,
        name: 'Smart Protection',
        type: 'Car',
        premium: 9674,
        coverage: 470530
      },
      {
        id: 43,
        status: true,
        name: 'Elite Cover',
        type: 'Life',
        premium: 8052,
        coverage: 859265
      },
      {
        id: 44,
        status: true,
        name: 'Elite Cover',
        type: 'Life',
        premium: 7631,
        coverage: 732400
      },
      {
        id: 45,
        status: true,
        name: 'Elite Cover',
        type: 'Life',
        premium: 6222,
        coverage: 778903
      },
      {
        id: 46,
        status: true,
        name: 'Guardian Plan',
        type: 'Pet',
        premium: 4847,
        coverage: 182407
      },
      {
        id: 47,
        status: true,
        name: 'Guardian Plan',
        type: 'Pet',
        premium: 7193,
        coverage: 181905
      },
      {
        id: 48,
        status: true,
        name: 'Guardian Plan',
        type: 'Pet',
        premium: 8070,
        coverage: 162824
      },
      {
        id: 49,
        status: true,
        name: 'Smart Package',
        type: 'Health',
        premium: 3052,
        coverage: 387315
      },
      {
        id: 50,
        status: true,
        name: 'Smart Package',
        type: 'Health',
        premium: 3179,
        coverage: 707575
      },
      {
        id: 51,
        status: true,
        name: 'Smart Package',
        type: 'Health',
        premium: 4348,
        coverage: 418295
      },
      {
        id: 52,
        status: true,
        name: 'Shield Package',
        type: 'Car',
        premium: 1724,
        coverage: 828831
      },
      {
        id: 53,
        status: true,
        name: 'Shield Package',
        type: 'Car',
        premium: 1167,
        coverage: 499469
      },
      {
        id: 54,
        status: true,
        name: 'Shield Package',
        type: 'Car',
        premium: 1810,
        coverage: 1002560
      },
      {
        id: 55,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 5005,
        coverage: 796228
      },
      {
        id: 56,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 4988,
        coverage: 745741
      },
      {
        id: 57,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 4327,
        coverage: 794463
      },
      {
        id: 58,
        status: true,
        name: 'Essential Plan',
        type: 'Life',
        premium: 5831,
        coverage: 685611
      },
      {
        id: 59,
        status: true,
        name: 'Essential Plan',
        type: 'Life',
        premium: 8843,
        coverage: 769366
      },
      {
        id: 60,
        status: true,
        name: 'Essential Plan',
        type: 'Life',
        premium: 9185,
        coverage: 440969
      },
      {
        id: 61,
        status: true,
        name: 'Prime Protection',
        type: 'Health',
        premium: 7154,
        coverage: 617997
      },
      {
        id: 62,
        status: true,
        name: 'Prime Protection',
        type: 'Health',
        premium: 6173,
        coverage: 745577
      },
      {
        id: 63,
        status: true,
        name: 'Prime Protection',
        type: 'Health',
        premium: 6176,
        coverage: 792459
      },
      {
        id: 64,
        status: true,
        name: 'Essential Cover',
        type: 'Car',
        premium: 5856,
        coverage: 468699
      },
      {
        id: 65,
        status: true,
        name: 'Essential Cover',
        type: 'Car',
        premium: 8713,
        coverage: 461128
      },
      {
        id: 66,
        status: true,
        name: 'Essential Cover',
        type: 'Car',
        premium: 7382,
        coverage: 377909
      },
      {
        id: 67,
        status: true,
        name: 'Essential Plan',
        type: 'Car',
        premium: 12717,
        coverage: 226047
      },
      {
        id: 68,
        status: true,
        name: 'Essential Plan',
        type: 'Car',
        premium: 9190,
        coverage: 158838
      },
      {
        id: 69,
        status: true,
        name: 'Essential Plan',
        type: 'Car',
        premium: 9634,
        coverage: 210287
      },
      {
        id: 70,
        status: true,
        name: 'Elite Protection',
        type: 'Travel',
        premium: 4182,
        coverage: 1071049
      },
      {
        id: 71,
        status: true,
        name: 'Elite Protection',
        type: 'Travel',
        premium: 5529,
        coverage: 1037418
      },
      {
        id: 72,
        status: true,
        name: 'Elite Protection',
        type: 'Travel',
        premium: 5191,
        coverage: 1125930
      },
      {
        id: 73,
        status: true,
        name: 'Elite Cover',
        type: 'Health',
        premium: 7249,
        coverage: 1062709
      },
      {
        id: 74,
        status: true,
        name: 'Elite Cover',
        type: 'Health',
        premium: 7244,
        coverage: 845580
      },
      {
        id: 75,
        status: true,
        name: 'Elite Cover',
        type: 'Health',
        premium: 6867,
        coverage: 1492273
      },
      {
        id: 76,
        status: true,
        name: 'Max Protection',
        type: 'Pet',
        premium: 1552,
        coverage: 590835
      },
      {
        id: 77,
        status: true,
        name: 'Max Protection',
        type: 'Pet',
        premium: 1251,
        coverage: 609938
      },
      {
        id: 78,
        status: true,
        name: 'Max Protection',
        type: 'Pet',
        premium: 2074,
        coverage: 610696
      },
      {
        id: 79,
        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 7782,
        coverage: 1145098
      },
      {
        id: 80,
        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 9372,
        coverage: 991558
      },
      {
        id: 81,
        status: true,
        name: 'Guardian Protection',
        type: 'Health',
        premium: 10414,
        coverage: 970068
      },
      {
        id: 82,
        status: true,
        name: 'Secure Cover',
        type: 'Car',
        premium: 9206,
        coverage: 752716
      },
      {
        id: 83,
        status: true,
        name: 'Secure Cover',
        type: 'Car',
        premium: 10135,
        coverage: 531089
      },
      {
        id: 84,
        status: true,
        name: 'Secure Cover',
        type: 'Car',
        premium: 8599,
        coverage: 580800
      },
      {
        id: 85,
        status: true,
        name: 'Protect Cover',
        type: 'Travel',
        premium: 6213,
        coverage: 393471
      },
      {
        id: 86,
        status: true,
        name: 'Protect Cover',
        type: 'Travel',
        premium: 5337,
        coverage: 275264
      },
      {
        id: 87,
        status: true,
        name: 'Protect Cover',
        type: 'Travel',
        premium: 5409,
        coverage: 302330
      },
      {
        id: 88,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 3943,
        coverage: 133357
      },
      {
        id: 89,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 4885,
        coverage: 160760
      },
      {
        id: 90,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 3386,
        coverage: 171890
      },
      {
        id: 91,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 5436,
        coverage: 454770
      },
      {
        id: 92,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 4687,
        coverage: 829505
      },
      {
        id: 93,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 4632,
        coverage: 939496
      },
      {
        id: 94,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 7015,
        coverage: 1181666
      },
      {
        id: 95,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 6040,
        coverage: 961213
      },
      {
        id: 96,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 5331,
        coverage: 665595
      },
      {
        id: 97,
        status: true,
        name: 'Protect Package',
        type: 'Car',
        premium: 3195,
        coverage: 181014
      },
      {
        id: 98,
        status: true,
        name: 'Protect Package',
        type: 'Car',
        premium: 2586,
        coverage: 276874
      },
      {
        id: 99,
        status: true,
        name: 'Protect Package',
        type: 'Car',
        premium: 2347,
        coverage: 201394
      },
      {
        id: 100,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 6099,
        coverage: 190276
      },
      {
        id: 101,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 7005,
        coverage: 162657
      },
      {
        id: 102,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 4715,
        coverage: 190405
      },
      {
        id: 103,
        status: true,
        name: 'Safe Protection',
        type: 'Life',
        premium: 10640,
        coverage: 1104460
      },
      {
        id: 104,
        status: true,
        name: 'Safe Protection',
        type: 'Life',
        premium: 9985,
        coverage: 1475912
      },
      {
        id: 105,
        status: true,
        name: 'Safe Protection',
        type: 'Life',
        premium: 8049,
        coverage: 1373767
      },
      {
        id: 106,
        status: true,
        name: 'Prime Plan',
        type: 'Life',
        premium: 4844,
        coverage: 840374
      },
      {
        id: 107,
        status: true,
        name: 'Prime Plan',
        type: 'Life',
        premium: 7150,
        coverage: 896364
      },
      {
        id: 108,
        status: true,
        name: 'Prime Plan',
        type: 'Life',
        premium: 4795,
        coverage: 1062072
      },
      {
        id: 109,
        status: true,
        name: 'Protect Cover',
        type: 'Health',
        premium: 7324,
        coverage: 1009353
      },
      {
        id: 110,
        status: true,
        name: 'Protect Cover',
        type: 'Health',
        premium: 6703,
        coverage: 897811
      },
      {
        id: 111,
        status: true,
        name: 'Protect Cover',
        type: 'Health',
        premium: 6645,
        coverage: 665008
      },
      {
        id: 112,
        status: true,
        name: 'Safe Package',
        type: 'Life',
        premium: 3474,
        coverage: 568391
      },
      {
        id: 113,
        status: true,
        name: 'Safe Package',
        type: 'Life',
        premium: 3334,
        coverage: 1049882
      },
      {
        id: 114,
        status: true,
        name: 'Safe Package',
        type: 'Life',
        premium: 3319,
        coverage: 1102853
      },
      {
        id: 115,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 10887,
        coverage: 254968
      },
      {
        id: 116,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 8541,
        coverage: 209453
      },
      {
        id: 117,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 9400,
        coverage: 270645
      },
      {
        id: 118,
        status: true,
        name: 'Safe Protection',
        type: 'Health',
        premium: 8555,
        coverage: 774442
      },
      {
        id: 119,
        status: true,
        name: 'Safe Protection',
        type: 'Health',
        premium: 6621,
        coverage: 468977
      },
      {
        id: 120,
        status: true,
        name: 'Safe Protection',
        type: 'Health',
        premium: 10954,
        coverage: 613535
      },
      {
        id: 121,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 11427,
        coverage: 409991
      },
      {
        id: 122,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 9511,
        coverage: 456114
      },
      {
        id: 123,
        status: true,
        name: 'Max Package',
        type: 'Car',
        premium: 10064,
        coverage: 394021
      },
      {
        id: 124,
        status: true,
        name: 'Secure Package',
        type: 'Pet',
        premium: 8435,
        coverage: 579714
      },
      {
        id: 125,
        status: true,
        name: 'Secure Package',
        type: 'Pet',
        premium: 7749,
        coverage: 773165
      },
      {
        id: 126,
        status: true,
        name: 'Secure Package',
        type: 'Pet',
        premium: 9005,
        coverage: 578083
      },
      {
        id: 127,
        status: true,
        name: 'Elite Protection',
        type: 'Car',
        premium: 2698,
        coverage: 299023
      },
      {
        id: 128,
        status: true,
        name: 'Elite Protection',
        type: 'Car',
        premium: 2615,
        coverage: 417615
      },
      {
        id: 129,
        status: true,
        name: 'Elite Protection',
        type: 'Car',
        premium: 2830,
        coverage: 420896
      },
      {
        id: 130,
        status: true,
        name: 'Safe Plan',
        type: 'Car',
        premium: 4576,
        coverage: 1264179
      },
      {
        id: 131,
        status: true,
        name: 'Safe Plan',
        type: 'Car',
        premium: 6587,
        coverage: 725446
      },
      {
        id: 132,
        status: true,
        name: 'Safe Plan',
        type: 'Car',
        premium: 4367,
        coverage: 905060
      },
      {
        id: 133,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 8281,
        coverage: 738861
      },
      {
        id: 134,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 11174,
        coverage: 1050534
      },
      {
        id: 135,
        status: true,
        name: 'Secure Cover',
        type: 'Pet',
        premium: 7436,
        coverage: 965902
      },
      {
        id: 136,
        status: true,
        name: 'Prime Cover',
        type: 'Home',
        premium: 2282,
        coverage: 1091359
      },
      {
        id: 137,
        status: true,
        name: 'Prime Cover',
        type: 'Home',
        premium: 1758,
        coverage: 819684
      },
      {
        id: 138,
        status: true,
        name: 'Prime Cover',
        type: 'Home',
        premium: 1731,
        coverage: 757309
      },
      {
        id: 139,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 4832,
        coverage: 449843
      },
      {
        id: 140,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 3471,
        coverage: 227915
      },
      {
        id: 141,
        status: true,
        name: 'Elite Package',
        type: 'Travel',
        premium: 3435,
        coverage: 258853
      },
      {
        id: 142,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 6481,
        coverage: 1452674
      },
      {
        id: 143,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 6027,
        coverage: 1048579
      },
      {
        id: 144,
        status: true,
        name: 'Smart Cover',
        type: 'Pet',
        premium: 4765,
        coverage: 1452320
      },
      {
        id: 145,
        status: true,
        name: 'Secure Protection',
        type: 'Travel',
        premium: 4130,
        coverage: 570468
      },
      {
        id: 146,
        status: true,
        name: 'Secure Protection',
        type: 'Travel',
        premium: 3530,
        coverage: 613615
      },
      {
        id: 147,
        status: true,
        name: 'Secure Protection',
        type: 'Travel',
        premium: 4208,
        coverage: 691708
      },
      {
        id: 148,
        status: true,
        name: 'Guardian Package',
        type: 'Life',
        premium: 3371,
        coverage: 446380
      },
      {
        id: 149,
        status: true,
        name: 'Guardian Package',
        type: 'Life',
        premium: 5835,
        coverage: 301196
      },
      {
        id: 150,
        status: true,
        name: 'Guardian Package',
        type: 'Life',
        premium: 5818,
        coverage: 326706
      },
      {
        id: 151,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 6004,
        coverage: 1435569
      },
      {
        id: 152,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 8698,
        coverage: 974329
      },
      {
        id: 153,
        status: true,
        name: 'Smart Protection',
        type: 'Life',
        premium: 5612,
        coverage: 690863
      },
      {
        id: 154,
        status: true,
        name: 'Guardian Cover',
        type: 'Life',
        premium: 3273,
        coverage: 1303206
      },
      {
        id: 155,
        status: true,
        name: 'Guardian Cover',
        type: 'Life',
        premium: 5197,
        coverage: 1208354
      },
      {
        id: 156,
        status: true,
        name: 'Guardian Cover',
        type: 'Life',
        premium: 4193,
        coverage: 1050383
      },
      {
        id: 157,
        status: true,
        name: 'Secure Protection',
        type: 'Pet',
        premium: 12998,
        coverage: 659023
      },
      {
        id: 158,
        status: true,
        name: 'Secure Protection',
        type: 'Pet',
        premium: 8534,
        coverage: 855524
      },
      {
        id: 159,
        status: true,
        name: 'Secure Protection',
        type: 'Pet',
        premium: 11825,
        coverage: 705180
      },
      {
        id: 160,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 3673,
        coverage: 460580
      },
      {
        id: 161,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 5964,
        coverage: 479378
      },
      {
        id: 162,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 5317,
        coverage: 277093
      },
      {
        id: 163,
        status: true,
        name: 'Essential Protection',
        type: 'Life',
        premium: 7434,
        coverage: 1399293
      },
      {
        id: 164,
        status: true,
        name: 'Essential Protection',
        type: 'Life',
        premium: 6954,
        coverage: 1285046
      },
      {
        id: 165,
        status: true,
        name: 'Essential Protection',
        type: 'Life',
        premium: 4268,
        coverage: 1371306
      },
      {
        id: 166,
        status: true,
        name: 'Prime Plan',
        type: 'Pet',
        premium: 3121,
        coverage: 648704
      },
      {
        id: 167,
        status: true,
        name: 'Prime Plan',
        type: 'Pet',
        premium: 4582,
        coverage: 666781
      },
      {
        id: 168,
        status: true,
        name: 'Prime Plan',
        type: 'Pet',
        premium: 3267,
        coverage: 513267
      },
      {
        id: 169,
        status: true,
        name: 'Secure Cover',
        type: 'Life',
        premium: 7874,
        coverage: 1077834
      },
      {
        id: 170,
        status: true,
        name: 'Secure Cover',
        type: 'Life',
        premium: 6703,
        coverage: 1094106
      },
      {
        id: 171,
        status: true,
        name: 'Secure Cover',
        type: 'Life',
        premium: 5081,
        coverage: 1541137
      },
      {
        id: 172,
        status: true,
        name: 'Shield Package',
        type: 'Home',
        premium: 3823,
        coverage: 857150
      },
      {
        id: 173,
        status: true,
        name: 'Shield Package',
        type: 'Home',
        premium: 3783,
        coverage: 818736
      },
      {
        id: 174,
        status: true,
        name: 'Shield Package',
        type: 'Home',
        premium: 4228,
        coverage: 785638
      },
      {
        id: 175,
        status: true,
        name: 'Guardian Cover',
        type: 'Pet',
        premium: 3282,
        coverage: 1062162
      },
      {
        id: 176,
        status: true,
        name: 'Guardian Cover',
        type: 'Pet',
        premium: 3294,
        coverage: 1180580
      },
      {
        id: 177,
        status: true,
        name: 'Guardian Cover',
        type: 'Pet',
        premium: 4243,
        coverage: 771033
      },
      {
        id: 178,
        status: true,
        name: 'Prime Package',
        type: 'Pet',
        premium: 11802,
        coverage: 757759
      },
      {
        id: 179,
        status: true,
        name: 'Prime Package',
        type: 'Pet',
        premium: 7282,
        coverage: 1383044
      },
      {
        id: 180,
        status: true,
        name: 'Prime Package',
        type: 'Pet',
        premium: 6805,
        coverage: 1374786
      },
      {
        id: 181,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 11708,
        coverage: 292957
      },
      {
        id: 182,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 13233,
        coverage: 236743
      },
      {
        id: 183,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 11968,
        coverage: 169346
      },
      {
        id: 184,
        status: true,
        name: 'Smart Cover',
        type: 'Car',
        premium: 2527,
        coverage: 1180677
      },
      {
        id: 185,
        status: true,
        name: 'Smart Cover',
        type: 'Car',
        premium: 1817,
        coverage: 1225100
      },
      {
        id: 186,
        status: true,
        name: 'Smart Cover',
        type: 'Car',
        premium: 2536,
        coverage: 1286298
      },
      {
        id: 187,
        status: true,
        name: 'Safe Cover',
        type: 'Home',
        premium: 9096,
        coverage: 168842
      },
      {
        id: 188,
        status: true,
        name: 'Safe Cover',
        type: 'Home',
        premium: 6953,
        coverage: 145859
      },
      {
        id: 189,
        status: true,
        name: 'Safe Cover',
        type: 'Home',
        premium: 6529,
        coverage: 195874
      },
      {
        id: 190,
        status: true,
        name: 'Max Protection',
        type: 'Car',
        premium: 2245,
        coverage: 655090
      },
      {
        id: 191,
        status: true,
        name: 'Max Protection',
        type: 'Car',
        premium: 1708,
        coverage: 619130
      },
      {
        id: 192,
        status: true,
        name: 'Max Protection',
        type: 'Car',
        premium: 2067,
        coverage: 794631
      },
      {
        id: 193,
        status: true,
        name: 'Max Plan',
        type: 'Life',
        premium: 2329,
        coverage: 867354
      },
      {
        id: 194,
        status: true,
        name: 'Max Plan',
        type: 'Life',
        premium: 3230,
        coverage: 633465
      },
      {
        id: 195,
        status: true,
        name: 'Max Plan',
        type: 'Life',
        premium: 3397,
        coverage: 902493
      },
      {
        id: 196,
        status: true,
        name: 'Guardian Cover',
        type: 'Travel',
        premium: 6259,
        coverage: 894987
      },
      {
        id: 197,
        status: true,
        name: 'Guardian Cover',
        type: 'Travel',
        premium: 5350,
        coverage: 885196
      },
      {
        id: 198,
        status: true,
        name: 'Guardian Cover',
        type: 'Travel',
        premium: 6959,
        coverage: 783370
      },
      {
        id: 199,
        status: true,
        name: 'Safe Protection',
        type: 'Home',
        premium: 6916,
        coverage: 1480105
      },
      {
        id: 200,
        status: true,
        name: 'Safe Protection',
        type: 'Home',
        premium: 7853,
        coverage: 1538070
      },
      {
        id: 201,
        status: true,
        name: 'Safe Protection',
        type: 'Home',
        premium: 7673,
        coverage: 731643
      },
      {
        id: 202,
        status: true,
        name: 'Prime Package',
        type: 'Travel',
        premium: 14198,
        coverage: 470678
      },
      {
        id: 203,
        status: true,
        name: 'Prime Package',
        type: 'Travel',
        premium: 10837,
        coverage: 310755
      },
      {
        id: 204,
        status: true,
        name: 'Prime Package',
        type: 'Travel',
        premium: 11424,
        coverage: 250873
      },
      {
        id: 205,
        status: true,
        name: 'Essential Plan',
        type: 'Travel',
        premium: 10038,
        coverage: 1524232
      },
      {
        id: 206,
        status: true,
        name: 'Essential Plan',
        type: 'Travel',
        premium: 6166,
        coverage: 767352
      },
      {
        id: 207,
        status: true,
        name: 'Essential Plan',
        type: 'Travel',
        premium: 8694,
        coverage: 717724
      },
      {
        id: 208,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 1096,
        coverage: 337284
      },
      {
        id: 209,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 1043,
        coverage: 415464
      },
      {
        id: 210,
        status: true,
        name: 'Max Plan',
        type: 'Health',
        premium: 1000,
        coverage: 390669
      },
      {
        id: 211,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 10753,
        coverage: 225473
      },
      {
        id: 212,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 7083,
        coverage: 288014
      },
      {
        id: 213,
        status: true,
        name: 'Guardian Plan',
        type: 'Life',
        premium: 9229,
        coverage: 187561
      },
      {
        id: 214,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 8235,
        coverage: 849695
      },
      {
        id: 215,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 7107,
        coverage: 591402
      },
      {
        id: 216,
        status: true,
        name: 'Safe Plan',
        type: 'Health',
        premium: 6198,
        coverage: 684863
      },
      {
        id: 217,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 12761,
        coverage: 768715
      },
      {
        id: 218,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 11693,
        coverage: 569253
      },
      {
        id: 219,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 9424,
        coverage: 844393
      },
      {
        id: 220,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 8185,
        coverage: 759289
      },
      {
        id: 221,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 8071,
        coverage: 982321
      },
      {
        id: 222,
        status: true,
        name: 'Elite Plan',
        type: 'Pet',
        premium: 7173,
        coverage: 898484
      },
      {
        id: 223,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 5539,
        coverage: 324828
      },
      {
        id: 224,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 5161,
        coverage: 277978
      },
      {
        id: 225,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 3731,
        coverage: 324239
      },
      {
        id: 226,
        status: true,
        name: 'Shield Plan',
        type: 'Travel',
        premium: 1378,
        coverage: 1047332
      },
      {
        id: 227,
        status: true,
        name: 'Shield Plan',
        type: 'Travel',
        premium: 1425,
        coverage: 1035451
      },
      {
        id: 228,
        status: true,
        name: 'Shield Plan',
        type: 'Travel',
        premium: 2083,
        coverage: 1254849
      },
      {
        id: 229,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 1823,
        coverage: 580515
      },
      {
        id: 230,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 2763,
        coverage: 754060
      },
      {
        id: 231,
        status: true,
        name: 'Guardian Cover',
        type: 'Health',
        premium: 1895,
        coverage: 584101
      },
      {
        id: 232,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 1709,
        coverage: 1083622
      },
      {
        id: 233,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 2012,
        coverage: 817914
      },
      {
        id: 234,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 1954,
        coverage: 779881
      },
      {
        id: 235,
        status: true,
        name: 'Guardian Protection',
        type: 'Car',
        premium: 5635,
        coverage: 578277
      },
      {
        id: 236,
        status: true,
        name: 'Guardian Protection',
        type: 'Car',
        premium: 5224,
        coverage: 588469
      },
      {
        id: 237,
        status: true,
        name: 'Guardian Protection',
        type: 'Car',
        premium: 3390,
        coverage: 838643
      },
      {
        id: 238,
        status: true,
        name: 'Shield Plan',
        type: 'Health',
        premium: 3323,
        coverage: 599520
      },
      {
        id: 239,
        status: true,
        name: 'Shield Plan',
        type: 'Health',
        premium: 3129,
        coverage: 522936
      },
      {
        id: 240,
        status: true,
        name: 'Shield Plan',
        type: 'Health',
        premium: 3388,
        coverage: 573200
      },
      {
        id: 241,
        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 5957,
        coverage: 197543
      },
      {
        id: 242,
        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 5740,
        coverage: 262378
      },
      {
        id: 243,
        status: true,
        name: 'Smart Protection',
        type: 'Travel',
        premium: 6670,
        coverage: 162249
      },
      {
        id: 244,
        status: true,
        name: 'Shield Protection',
        type: 'Health',
        premium: 9546,
        coverage: 1232563
      },
      {
        id: 245,
        status: true,
        name: 'Shield Protection',
        type: 'Health',
        premium: 11094,
        coverage: 821676
      },
      {
        id: 246,
        status: true,
        name: 'Shield Protection',
        type: 'Health',
        premium: 11005,
        coverage: 868912
      },
      {
        id: 247,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 9061,
        coverage: 831330
      },
      {
        id: 248,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 13839,
        coverage: 529957
      },
      {
        id: 249,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 9495,
        coverage: 983627
      },
      {
        id: 250,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 5991,
        coverage: 1053110
      },
      {
        id: 251,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 4136,
        coverage: 658324
      },
      {
        id: 252,
        status: true,
        name: 'Prime Cover',
        type: 'Health',
        premium: 4945,
        coverage: 853395
      },
      {
        id: 253,
        status: true,
        name: 'Essential Protection',
        type: 'Health',
        premium: 1679,
        coverage: 835889
      },
      {
        id: 254,
        status: true,
        name: 'Essential Protection',
        type: 'Health',
        premium: 2134,
        coverage: 665975
      },
      {
        id: 255,
        status: true,
        name: 'Essential Protection',
        type: 'Health',
        premium: 1811,
        coverage: 452353
      },
      {
        id: 256,
        status: true,
        name: 'Max Cover',
        type: 'Home',
        premium: 4738,
        coverage: 1576088
      },
      {
        id: 257,
        status: true,
        name: 'Max Cover',
        type: 'Home',
        premium: 3497,
        coverage: 768669
      },
      {
        id: 258,
        status: true,
        name: 'Max Cover',
        type: 'Home',
        premium: 4676,
        coverage: 1145042
      },
      {
        id: 259,
        status: true,
        name: 'Elite Package',
        type: 'Pet',
        premium: 8076,
        coverage: 167028
      },
      {
        id: 260,
        status: true,
        name: 'Elite Package',
        type: 'Pet',
        premium: 7084,
        coverage: 250481
      },
      {
        id: 261,
        status: true,
        name: 'Elite Package',
        type: 'Pet',
        premium: 8781,
        coverage: 277630
      },
      {
        id: 262,
        status: true,
        name: 'Secure Plan',
        type: 'Home',
        premium: 1830,
        coverage: 252178
      },
      {
        id: 263,
        status: true,
        name: 'Secure Plan',
        type: 'Home',
        premium: 2403,
        coverage: 310254
      },
      {
        id: 264,
        status: true,
        name: 'Secure Plan',
        type: 'Home',
        premium: 1781,
        coverage: 486503
      },
      {
        id: 265,
        status: true,
        name: 'Protect Protection',
        type: 'Home',
        premium: 7080,
        coverage: 622505
      },
      {
        id: 266,
        status: true,
        name: 'Protect Protection',
        type: 'Home',
        premium: 7651,
        coverage: 533129
      },
      {
        id: 267,
        status: true,
        name: 'Protect Protection',
        type: 'Home',
        premium: 8756,
        coverage: 623339
      },
      {
        id: 268,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 5616,
        coverage: 417268
      },
      {
        id: 269,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 4048,
        coverage: 348424
      },
      {
        id: 270,
        status: true,
        name: 'Essential Protection',
        type: 'Travel',
        premium: 5183,
        coverage: 231492
      },
      {
        id: 271,
        status: true,
        name: 'Guardian Plan',
        type: 'Home',
        premium: 11577,
        coverage: 174867
      },
      {
        id: 272,
        status: true,
        name: 'Guardian Plan',
        type: 'Home',
        premium: 7967,
        coverage: 223845
      },
      {
        id: 273,
        status: true,
        name: 'Guardian Plan',
        type: 'Home',
        premium: 8120,
        coverage: 184754
      },
      {
        id: 274,
        status: true,
        name: 'Smart Plan',
        type: 'Pet',
        premium: 5141,
        coverage: 450782
      },
      {
        id: 275,
        status: true,
        name: 'Smart Plan',
        type: 'Pet',
        premium: 3692,
        coverage: 551984
      },
      {
        id: 276,
        status: true,
        name: 'Smart Plan',
        type: 'Pet',
        premium: 3952,
        coverage: 313465
      },
      {
        id: 277,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 5840,
        coverage: 106108
      },
      {
        id: 278,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 3781,
        coverage: 161881
      },
      {
        id: 279,
        status: true,
        name: 'Essential Plan',
        type: 'Pet',
        premium: 6399,
        coverage: 143514
      },
      {
        id: 280,
        status: true,
        name: 'Prime Package',
        type: 'Life',
        premium: 5539,
        coverage: 455750
      },
      {
        id: 281,
        status: true,
        name: 'Prime Package',
        type: 'Life',
        premium: 4041,
        coverage: 725373
      },
      {
        id: 282,
        status: true,
        name: 'Prime Package',
        type: 'Life',
        premium: 6795,
        coverage: 560241
      },
      {
        id: 283,
        status: true,
        name: 'Protect Cover',
        type: 'Pet',
        premium: 2060,
        coverage: 430862
      },
      {
        id: 284,
        status: true,
        name: 'Protect Cover',
        type: 'Pet',
        premium: 2175,
        coverage: 445270
      },
      {
        id: 285,
        status: true,
        name: 'Protect Cover',
        type: 'Pet',
        premium: 2170,
        coverage: 460051
      },
      {
        id: 286,
        status: true,
        name: 'Shield Package',
        type: 'Pet',
        premium: 4623,
        coverage: 1007308
      },
      {
        id: 287,
        status: true,
        name: 'Shield Package',
        type: 'Pet',
        premium: 5057,
        coverage: 734639
      },
      {
        id: 288,
        status: true,
        name: 'Shield Package',
        type: 'Pet',
        premium: 6254,
        coverage: 718382
      },
      {
        id: 289,
        status: true,
        name: 'Shield Cover',
        type: 'Life',
        premium: 11729,
        coverage: 364754
      },
      {
        id: 290,
        status: true,
        name: 'Shield Cover',
        type: 'Life',
        premium: 10473,
        coverage: 557589
      },
      {
        id: 291,
        status: true,
        name: 'Shield Cover',
        type: 'Life',
        premium: 8998,
        coverage: 409955
      },
      {
        id: 292,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 2914,
        coverage: 520006
      },
      {
        id: 293,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 3948,
        coverage: 379425
      },
      {
        id: 294,
        status: true,
        name: 'Safe Package',
        type: 'Pet',
        premium: 2883,
        coverage: 545268
      },
      {
        id: 295,
        status: true,
        name: 'Smart Plan',
        type: 'Car',
        premium: 11008,
        coverage: 1443302
      },
      {
        id: 296,
        status: true,
        name: 'Smart Plan',
        type: 'Car',
        premium: 9975,
        coverage: 1226158
      },
      {
        id: 297,
        status: true,
        name: 'Smart Plan',
        type: 'Car',
        premium: 6164,
        coverage: 925058
      },
      {
        id: 298,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 3108,
        coverage: 1038443
      },
      {
        id: 299,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 3724,
        coverage: 1355097
      },
      {
        id: 300,
        status: true,
        name: 'Elite Plan',
        type: 'Car',
        premium: 3230,
        coverage: 1359534
      }
    ];

    return policies;
  }

  /**
   * Initiate the db connections
   */
  async onModuleInit() {
    try {
      this.logger.log(`Database Connected Succesffully`);
    } catch (error) {
      // console.log('failed to connect Database : ', error);
      this.logger.error(`Failed to Connect Database : `);
    }
  }

  /**
   * Destory the connections
   */
  async onModuleDestroy() {
    try {
      this.logger.log(`Database Connection Terminated Successfully`);
    } catch (er) {
      this.logger.error(`Failed to Destroy Database`);
    }
  }
}
