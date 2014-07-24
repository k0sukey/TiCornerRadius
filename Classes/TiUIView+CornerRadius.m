/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2009-2014年 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

#import "TiUIView+CornerRadius.h"
#import "JRSwizzle.h"

@interface TiUIView ()
-(void)checkBounds;
@end

@implementation TiUIView (TiUIView_CornerRadius)

+(void)load
{
    // by https://github.com/omorandi/TiViewShadow/blob/master/Classes/TiUIView%2BWithShadow.m
    NSError *error = nil;
    
    [TiUIView jr_swizzleMethod:@selector(checkBounds)
                    withMethod:@selector(checkBoundsAlt)
                         error:&error];
    if (error != nil)
    {
        NSLog(@"[ERROR] %@", [error localizedDescription]);
    }
}

-(void)checkBoundsAlt
{
    [self checkBoundsAlt];
    
    NSDictionary *props = [self.proxy valueForUndefinedKey:@"cornerRadius"];
    
    if (props == nil)
    {
        return;
    }
    [self makeCornerRadius:props];
}

-(void)makeCornerRadius:(NSDictionary *)props
{
    if ([props objectForKey:@"corners"] == nil)
    {
        return;
    }
    
    UIRectCorner corners = [TiUtils intValue:[props objectForKey:@"corners"]];
    NSDictionary *size = [props objectForKey:@"radii"];
    CGSize radii = CGSizeMake([TiUtils floatValue:[size objectForKey:@"width"] def:.0f],
                              [TiUtils floatValue:[size objectForKey:@"height"] def:.0f]);
    
    UIBezierPath *maskPath = [UIBezierPath bezierPathWithRoundedRect:[self bounds]
                                                   byRoundingCorners:corners
                                                         cornerRadii:radii];
    
    CAShapeLayer *maskLayer = [[CAShapeLayer alloc] init];
    maskLayer.frame = self.bounds;
    maskLayer.path = maskPath.CGPath;
    self.layer.mask = maskLayer;
    
    if ([props objectForKey:@"border"] != nil)
    {
        NSDictionary *border = [props objectForKey:@"border"];
        
        CAShapeLayer *borderLayer = [[CAShapeLayer alloc] init];
        borderLayer.frame = self.bounds;
        borderLayer.path = maskPath.CGPath;
        borderLayer.fillColor = [UIColor clearColor].CGColor;
        borderLayer.lineWidth = [TiUtils floatValue:[border objectForKey:@"width"] def:.0f];
        TiColor *tiColor = [TiUtils colorValue:[border objectForKey:@"color"]];
		borderLayer.strokeColor = [tiColor _color].CGColor;
        [self.layer addSublayer:borderLayer];
    }
}

-(void)setCornerRadius_:(id)args
{
    if (args == nil)
    {
        return;
    }
    
    NSDictionary *props = args;
    [self makeCornerRadius:props];
}

@end
