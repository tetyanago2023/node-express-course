// 16-streams.js

// Import the fs module to work with file system operations
const { createReadStream } = require("fs");
const path = require("path");

// Path to the big.txt file
const filePath = path.join(__dirname, "../content/big.txt");

// Create a read stream with UTF-8 encoding and specified highWaterMark
const highWaterMark = 200; // This value can be modified as needed for testing. Total chunks received will vary based on this value.
const stream = createReadStream(filePath, { encoding: "utf8", highWaterMark });

let chunkCount = 0; // Initialize chunk counter

// Handle "data" event: triggered when a chunk is read
stream.on("data", (chunk) => {
    chunkCount++; // Increment the chunk counter
    console.log(`Chunk ${chunkCount}:`, chunk); // Log the chunk to the console
});

// Handle "end" event: triggered when the stream has finished reading all data
stream.on("end", () => {
    console.log(`Stream finished. Total chunks received: ${chunkCount}`);
});

// Handle "error" event: triggered if an error occurs during reading
stream.on("error", (error) => {
    console.error("An error occurred:", error);
});

// How to test:
// Prepare a large file `01-node-tutorial/content/big.txt` with text content via running `% node 01-node-tutorial/15-create-big-file.js`.
// Type in the terminal in the `01-node-tutorial/answers`: % node 16-streams.js`.
// Expected output:
// Chunk 1: hello world 0
// hello world 1
// hello world 2
// hello world 3
// hello world 4
// hello world 5
// hello world 6
// hello world 7
// hello world 8
// hello world 9
// hello world 10
// hello world 11
// hello world 12
// hello world 13
//
// Chunk 2: hello world 14
// hello world 15
// hello world 16
// hello world 17
// hello world 18
// hello world 19
// hello world 20
// hello world 21
// hello world 22
// hello world 23
// hello world 24
// hello world 25
// hello world 26
// hello
// Chunk 3:  world 27
// hello world 28
// hello world 29
// hello world 30
// hello world 31
// hello world 32
// hello world 33
// hello world 34
// hello world 35
// hello world 36
// hello world 37
// hello world 38
// hello world 39
// hello worl
// Chunk 4: d 40
// hello world 41
// hello world 42
// hello world 43
// hello world 44
// hello world 45
// hello world 46
// hello world 47
// hello world 48
// hello world 49
// hello world 50
// hello world 51
// hello world 52
// hello world 53
//
// Chunk 5: hello world 54
// hello world 55
// hello world 56
// hello world 57
// hello world 58
// hello world 59
// hello world 60
// hello world 61
// hello world 62
// hello world 63
// hello world 64
// hello world 65
// hello world 66
// hello
// Chunk 6:  world 67
// hello world 68
// hello world 69
// hello world 70
// hello world 71
// hello world 72
// hello world 73
// hello world 74
// hello world 75
// hello world 76
// hello world 77
// hello world 78
// hello world 79
// hello worl
// Chunk 7: d 80
// hello world 81
// hello world 82
// hello world 83
// hello world 84
// hello world 85
// hello world 86
// hello world 87
// hello world 88
// hello world 89
// hello world 90
// hello world 91
// hello world 92
// hello world 93
//
// Chunk 8: hello world 94
// hello world 95
// hello world 96
// hello world 97
// hello world 98
// hello world 99
// hello world 100
// hello world 101
// hello world 102
// hello world 103
// hello world 104
// hello world 105
// hello world 10
// Chunk 9: 6
// hello world 107
// hello world 108
// hello world 109
// hello world 110
// hello world 111
// hello world 112
// hello world 113
// hello world 114
// hello world 115
// hello world 116
// hello world 117
// hello world 118
// hello
// Chunk 10: world 119
// hello world 120
// hello world 121
// hello world 122
// hello world 123
// hello world 124
// hello world 125
// hello world 126
// hello world 127
// hello world 128
// hello world 129
// hello world 130
// hello world 13
// Chunk 11: 1
// hello world 132
// hello world 133
// hello world 134
// hello world 135
// hello world 136
// hello world 137
// hello world 138
// hello world 139
// hello world 140
// hello world 141
// hello world 142
// hello world 143
// hello
// Chunk 12: world 144
// hello world 145
// hello world 146
// hello world 147
// hello world 148
// hello world 149
// hello world 150
// hello world 151
// hello world 152
// hello world 153
// hello world 154
// hello world 155
// hello world 15
// Chunk 13: 6
// hello world 157
// hello world 158
// hello world 159
// hello world 160
// hello world 161
// hello world 162
// hello world 163
// hello world 164
// hello world 165
// hello world 166
// hello world 167
// hello world 168
// hello
// Chunk 14: world 169
// hello world 170
// hello world 171
// hello world 172
// hello world 173
// hello world 174
// hello world 175
// hello world 176
// hello world 177
// hello world 178
// hello world 179
// hello world 180
// hello world 18
// Chunk 15: 1
// hello world 182
// hello world 183
// hello world 184
// hello world 185
// hello world 186
// hello world 187
// hello world 188
// hello world 189
// hello world 190
// hello world 191
// hello world 192
// hello world 193
// hello
// Chunk 16: world 194
// hello world 195
// hello world 196
// hello world 197
// hello world 198
// hello world 199
// hello world 200
// hello world 201
// hello world 202
// hello world 203
// hello world 204
// hello world 205
// hello world 20
// Chunk 17: 6
// hello world 207
// hello world 208
// hello world 209
// hello world 210
// hello world 211
// hello world 212
// hello world 213
// hello world 214
// hello world 215
// hello world 216
// hello world 217
// hello world 218
// hello
// Chunk 18: world 219
// hello world 220
// hello world 221
// hello world 222
// hello world 223
// hello world 224
// hello world 225
// hello world 226
// hello world 227
// hello world 228
// hello world 229
// hello world 230
// hello world 23
// Chunk 19: 1
// hello world 232
// hello world 233
// hello world 234
// hello world 235
// hello world 236
// hello world 237
// hello world 238
// hello world 239
// hello world 240
// hello world 241
// hello world 242
// hello world 243
// hello
// Chunk 20: world 244
// hello world 245
// hello world 246
// hello world 247
// hello world 248
// hello world 249
// hello world 250
// hello world 251
// hello world 252
// hello world 253
// hello world 254
// hello world 255
// hello world 25
// Chunk 21: 6
// hello world 257
// hello world 258
// hello world 259
// hello world 260
// hello world 261
// hello world 262
// hello world 263
// hello world 264
// hello world 265
// hello world 266
// hello world 267
// hello world 268
// hello
// Chunk 22: world 269
// hello world 270
// hello world 271
// hello world 272
// hello world 273
// hello world 274
// hello world 275
// hello world 276
// hello world 277
// hello world 278
// hello world 279
// hello world 280
// hello world 28
// Chunk 23: 1
// hello world 282
// hello world 283
// hello world 284
// hello world 285
// hello world 286
// hello world 287
// hello world 288
// hello world 289
// hello world 290
// hello world 291
// hello world 292
// hello world 293
// hello
// Chunk 24: world 294
// hello world 295
// hello world 296
// hello world 297
// hello world 298
// hello world 299
// hello world 300
// hello world 301
// hello world 302
// hello world 303
// hello world 304
// hello world 305
// hello world 30
// Chunk 25: 6
// hello world 307
// hello world 308
// hello world 309
// hello world 310
// hello world 311
// hello world 312
// hello world 313
// hello world 314
// hello world 315
// hello world 316
// hello world 317
// hello world 318
// hello
// Chunk 26: world 319
// hello world 320
// hello world 321
// hello world 322
// hello world 323
// hello world 324
// hello world 325
// hello world 326
// hello world 327
// hello world 328
// hello world 329
// hello world 330
// hello world 33
// Chunk 27: 1
// hello world 332
// hello world 333
// hello world 334
// hello world 335
// hello world 336
// hello world 337
// hello world 338
// hello world 339
// hello world 340
// hello world 341
// hello world 342
// hello world 343
// hello
// Chunk 28: world 344
// hello world 345
// hello world 346
// hello world 347
// hello world 348
// hello world 349
// hello world 350
// hello world 351
// hello world 352
// hello world 353
// hello world 354
// hello world 355
// hello world 35
// Chunk 29: 6
// hello world 357
// hello world 358
// hello world 359
// hello world 360
// hello world 361
// hello world 362
// hello world 363
// hello world 364
// hello world 365
// hello world 366
// hello world 367
// hello world 368
// hello
// Chunk 30: world 369
// hello world 370
// hello world 371
// hello world 372
// hello world 373
// hello world 374
// hello world 375
// hello world 376
// hello world 377
// hello world 378
// hello world 379
// hello world 380
// hello world 38
// Chunk 31: 1
// hello world 382
// hello world 383
// hello world 384
// hello world 385
// hello world 386
// hello world 387
// hello world 388
// hello world 389
// hello world 390
// hello world 391
// hello world 392
// hello world 393
// hello
// Chunk 32: world 394
// hello world 395
// hello world 396
// hello world 397
// hello world 398
// hello world 399
// hello world 400
// hello world 401
// hello world 402
// hello world 403
// hello world 404
// hello world 405
// hello world 40
// Chunk 33: 6
// hello world 407
// hello world 408
// hello world 409
// hello world 410
// hello world 411
// hello world 412
// hello world 413
// hello world 414
// hello world 415
// hello world 416
// hello world 417
// hello world 418
// hello
// Chunk 34: world 419
// hello world 420
// hello world 421
// hello world 422
// hello world 423
// hello world 424
// hello world 425
// hello world 426
// hello world 427
// hello world 428
// hello world 429
// hello world 430
// hello world 43
// Chunk 35: 1
// hello world 432
// hello world 433
// hello world 434
// hello world 435
// hello world 436
// hello world 437
// hello world 438
// hello world 439
// hello world 440
// hello world 441
// hello world 442
// hello world 443
// hello
// Chunk 36: world 444
// hello world 445
// hello world 446
// hello world 447
// hello world 448
// hello world 449
// hello world 450
// hello world 451
// hello world 452
// hello world 453
// hello world 454
// hello world 455
// hello world 45
// Chunk 37: 6
// hello world 457
// hello world 458
// hello world 459
// hello world 460
// hello world 461
// hello world 462
// hello world 463
// hello world 464
// hello world 465
// hello world 466
// hello world 467
// hello world 468
// hello
// Chunk 38: world 469
// hello world 470
// hello world 471
// hello world 472
// hello world 473
// hello world 474
// hello world 475
// hello world 476
// hello world 477
// hello world 478
// hello world 479
// hello world 480
// hello world 48
// Chunk 39: 1
// hello world 482
// hello world 483
// hello world 484
// hello world 485
// hello world 486
// hello world 487
// hello world 488
// hello world 489
// hello world 490
// hello world 491
// hello world 492
// hello world 493
// hello
// Chunk 40: world 494
// hello world 495
// hello world 496
// hello world 497
// hello world 498
// hello world 499
// hello world 500
// hello world 501
// hello world 502
// hello world 503
// hello world 504
// hello world 505
// hello world 50
// Chunk 41: 6
// hello world 507
// hello world 508
// hello world 509
// hello world 510
// hello world 511
// hello world 512
// hello world 513
// hello world 514
// hello world 515
// hello world 516
// hello world 517
// hello world 518
// hello
// Chunk 42: world 519
// hello world 520
// hello world 521
// hello world 522
// hello world 523
// hello world 524
// hello world 525
// hello world 526
// hello world 527
// hello world 528
// hello world 529
// hello world 530
// hello world 53
// Chunk 43: 1
// hello world 532
// hello world 533
// hello world 534
// hello world 535
// hello world 536
// hello world 537
// hello world 538
// hello world 539
// hello world 540
// hello world 541
// hello world 542
// hello world 543
// hello
// Chunk 44: world 544
// hello world 545
// hello world 546
// hello world 547
// hello world 548
// hello world 549
// hello world 550
// hello world 551
// hello world 552
// hello world 553
// hello world 554
// hello world 555
// hello world 55
// Chunk 45: 6
// hello world 557
// hello world 558
// hello world 559
// hello world 560
// hello world 561
// hello world 562
// hello world 563
// hello world 564
// hello world 565
// hello world 566
// hello world 567
// hello world 568
// hello
// Chunk 46: world 569
// hello world 570
// hello world 571
// hello world 572
// hello world 573
// hello world 574
// hello world 575
// hello world 576
// hello world 577
// hello world 578
// hello world 579
// hello world 580
// hello world 58
// Chunk 47: 1
// hello world 582
// hello world 583
// hello world 584
// hello world 585
// hello world 586
// hello world 587
// hello world 588
// hello world 589
// hello world 590
// hello world 591
// hello world 592
// hello world 593
// hello
// Chunk 48: world 594
// hello world 595
// hello world 596
// hello world 597
// hello world 598
// hello world 599
// hello world 600
// hello world 601
// hello world 602
// hello world 603
// hello world 604
// hello world 605
// hello world 60
// Chunk 49: 6
// hello world 607
// hello world 608
// hello world 609
// hello world 610
// hello world 611
// hello world 612
// hello world 613
// hello world 614
// hello world 615
// hello world 616
// hello world 617
// hello world 618
// hello
// Chunk 50: world 619
// hello world 620
// hello world 621
// hello world 622
// hello world 623
// hello world 624
// hello world 625
// hello world 626
// hello world 627
// hello world 628
// hello world 629
// hello world 630
// hello world 63
// Chunk 51: 1
// hello world 632
// hello world 633
// hello world 634
// hello world 635
// hello world 636
// hello world 637
// hello world 638
// hello world 639
// hello world 640
// hello world 641
// hello world 642
// hello world 643
// hello
// Chunk 52: world 644
// hello world 645
// hello world 646
// hello world 647
// hello world 648
// hello world 649
// hello world 650
// hello world 651
// hello world 652
// hello world 653
// hello world 654
// hello world 655
// hello world 65
// Chunk 53: 6
// hello world 657
// hello world 658
// hello world 659
// hello world 660
// hello world 661
// hello world 662
// hello world 663
// hello world 664
// hello world 665
// hello world 666
// hello world 667
// hello world 668
// hello
// Chunk 54: world 669
// hello world 670
// hello world 671
// hello world 672
// hello world 673
// hello world 674
// hello world 675
// hello world 676
// hello world 677
// hello world 678
// hello world 679
// hello world 680
// hello world 68
// Chunk 55: 1
// hello world 682
// hello world 683
// hello world 684
// hello world 685
// hello world 686
// hello world 687
// hello world 688
// hello world 689
// hello world 690
// hello world 691
// hello world 692
// hello world 693
// hello
// Chunk 56: world 694
// hello world 695
// hello world 696
// hello world 697
// hello world 698
// hello world 699
// hello world 700
// hello world 701
// hello world 702
// hello world 703
// hello world 704
// hello world 705
// hello world 70
// Chunk 57: 6
// hello world 707
// hello world 708
// hello world 709
// hello world 710
// hello world 711
// hello world 712
// hello world 713
// hello world 714
// hello world 715
// hello world 716
// hello world 717
// hello world 718
// hello
// Chunk 58: world 719
// hello world 720
// hello world 721
// hello world 722
// hello world 723
// hello world 724
// hello world 725
// hello world 726
// hello world 727
// hello world 728
// hello world 729
// hello world 730
// hello world 73
// Chunk 59: 1
// hello world 732
// hello world 733
// hello world 734
// hello world 735
// hello world 736
// hello world 737
// hello world 738
// hello world 739
// hello world 740
// hello world 741
// hello world 742
// hello world 743
// hello
// Chunk 60: world 744
// hello world 745
// hello world 746
// hello world 747
// hello world 748
// hello world 749
// hello world 750
// hello world 751
// hello world 752
// hello world 753
// hello world 754
// hello world 755
// hello world 75
// Chunk 61: 6
// hello world 757
// hello world 758
// hello world 759
// hello world 760
// hello world 761
// hello world 762
// hello world 763
// hello world 764
// hello world 765
// hello world 766
// hello world 767
// hello world 768
// hello
// Chunk 62: world 769
// hello world 770
// hello world 771
// hello world 772
// hello world 773
// hello world 774
// hello world 775
// hello world 776
// hello world 777
// hello world 778
// hello world 779
// hello world 780
// hello world 78
// Chunk 63: 1
// hello world 782
// hello world 783
// hello world 784
// hello world 785
// hello world 786
// hello world 787
// hello world 788
// hello world 789
// hello world 790
// hello world 791
// hello world 792
// hello world 793
// hello
// Chunk 64: world 794
// hello world 795
// hello world 796
// hello world 797
// hello world 798
// hello world 799
// hello world 800
// hello world 801
// hello world 802
// hello world 803
// hello world 804
// hello world 805
// hello world 80
// Chunk 65: 6
// hello world 807
// hello world 808
// hello world 809
// hello world 810
// hello world 811
// hello world 812
// hello world 813
// hello world 814
// hello world 815
// hello world 816
// hello world 817
// hello world 818
// hello
// Chunk 66: world 819
// hello world 820
// hello world 821
// hello world 822
// hello world 823
// hello world 824
// hello world 825
// hello world 826
// hello world 827
// hello world 828
// hello world 829
// hello world 830
// hello world 83
// Chunk 67: 1
// hello world 832
// hello world 833
// hello world 834
// hello world 835
// hello world 836
// hello world 837
// hello world 838
// hello world 839
// hello world 840
// hello world 841
// hello world 842
// hello world 843
// hello
// Chunk 68: world 844
// hello world 845
// hello world 846
// hello world 847
// hello world 848
// hello world 849
// hello world 850
// hello world 851
// hello world 852
// hello world 853
// hello world 854
// hello world 855
// hello world 85
// Chunk 69: 6
// hello world 857
// hello world 858
// hello world 859
// hello world 860
// hello world 861
// hello world 862
// hello world 863
// hello world 864
// hello world 865
// hello world 866
// hello world 867
// hello world 868
// hello
// Chunk 70: world 869
// hello world 870
// hello world 871
// hello world 872
// hello world 873
// hello world 874
// hello world 875
// hello world 876
// hello world 877
// hello world 878
// hello world 879
// hello world 880
// hello world 88
// Chunk 71: 1
// hello world 882
// hello world 883
// hello world 884
// hello world 885
// hello world 886
// hello world 887
// hello world 888
// hello world 889
// hello world 890
// hello world 891
// hello world 892
// hello world 893
// hello
// Chunk 72: world 894
// hello world 895
// hello world 896
// hello world 897
// hello world 898
// hello world 899
// hello world 900
// hello world 901
// hello world 902
// hello world 903
// hello world 904
// hello world 905
// hello world 90
// Chunk 73: 6
// hello world 907
// hello world 908
// hello world 909
// hello world 910
// hello world 911
// hello world 912
// hello world 913
// hello world 914
// hello world 915
// hello world 916
// hello world 917
// hello world 918
// hello
// Chunk 74: world 919
// hello world 920
// hello world 921
// hello world 922
// hello world 923
// hello world 924
// hello world 925
// hello world 926
// hello world 927
// hello world 928
// hello world 929
// hello world 930
// hello world 93
// Chunk 75: 1
// hello world 932
// hello world 933
// hello world 934
// hello world 935
// hello world 936
// hello world 937
// hello world 938
// hello world 939
// hello world 940
// hello world 941
// hello world 942
// hello world 943
// hello
// Chunk 76: world 944
// hello world 945
// hello world 946
// hello world 947
// hello world 948
// hello world 949
// hello world 950
// hello world 951
// hello world 952
// hello world 953
// hello world 954
// hello world 955
// hello world 95
// Chunk 77: 6
// hello world 957
// hello world 958
// hello world 959
// hello world 960
// hello world 961
// hello world 962
// hello world 963
// hello world 964
// hello world 965
// hello world 966
// hello world 967
// hello world 968
// hello
// Chunk 78: world 969
// hello world 970
// hello world 971
// hello world 972
// hello world 973
// hello world 974
// hello world 975
// hello world 976
// hello world 977
// hello world 978
// hello world 979
// hello world 980
// hello world 98
// Chunk 79: 1
// hello world 982
// hello world 983
// hello world 984
// hello world 985
// hello world 986
// hello world 987
// hello world 988
// hello world 989
// hello world 990
// hello world 991
// hello world 992
// hello world 993
// hello
// Chunk 80: world 994
// hello world 995
// hello world 996
// hello world 997
// hello world 998
// hello world 999
//
// Stream finished. Total chunks received: 80
